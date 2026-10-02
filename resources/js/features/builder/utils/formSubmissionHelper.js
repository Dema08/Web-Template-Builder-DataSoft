import { toast } from '@store';

/**
 * Form Submission Helper
 * Automatically extracts form data from an enclosing form or card container
 * and sends it to WhatsApp or Email based on the action configuration.
 */
export function extractFormData(containerElement) {
  if (!containerElement) return [];
  
  // Find all input, textarea, and select elements
  const elements = Array.from(
    containerElement.querySelectorAll('input:not([type="hidden"]):not([type="submit"]):not([type="button"]), select, textarea')
  );

  const fields = [];
  elements.forEach((el, index) => {
    // Find label
    let label = '';
    
    // 1. By label element with for attribute
    if (el.id) {
      const labelEl = containerElement.querySelector(`label[for="${el.id}"]`);
      if (labelEl) label = labelEl.innerText.trim();
    }
    
    // 2. By preceding/parent label element
    if (!label) {
      const parent = el.closest('div');
      const labelEl = parent?.querySelector('label');
      if (labelEl) label = labelEl.innerText.trim();
    }

    // 3. Fallback to placeholder or name
    if (!label) {
      label = el.placeholder || el.name || `Field ${index + 1}`;
    }

    // Clean label (remove trailing colons or asterisks)
    label = label.replace(/[:*]\s*$/, '').trim();

    let val = el.value !== undefined ? String(el.value).trim() : '';
    if (!val && el.type === 'checkbox') {
      val = el.checked ? 'Ya / Checked' : 'Tidak';
    }

    fields.push({
      label: label || `Field ${index + 1}`,
      value: val || '-',
      required: el.required || false,
      element: el,
    });
  });

  return fields;
}

/**
 * Dispatches form data to WhatsApp or Email
 * @param {Object} options
 * @param {HTMLElement} options.containerElement Form or Card element containing inputs
 * @param {Object} options.action Action configuration object
 * @param {Function} [options.onSuccess] Callback on successful dispatch
 */
export function handleCardFormSubmit(arg1, arg2, arg3) {
  let containerElement = null;
  let action = {};
  let defaultTarget = '';
  let defaultChannel = 'whatsapp';
  let defaultIntro = 'Halo Admin, ada permohonan baru dari formulir website:';
  let defaultSubject = '[Form Website] Permohonan Baru';
  let onSuccess = null;

  if (arg1 && (arg1 instanceof HTMLElement || arg1.nodeType || typeof arg1.querySelectorAll === 'function')) {
    // Positional call: handleCardFormSubmit(containerElement, action, options)
    containerElement = arg1;
    action = arg2 || {};
    if (arg3 && typeof arg3 === 'object') {
      defaultTarget = arg3.defaultTarget || '';
      defaultChannel = arg3.defaultChannel || 'whatsapp';
      defaultIntro = arg3.defaultIntro || defaultIntro;
      defaultSubject = arg3.defaultSubject || defaultSubject;
      onSuccess = arg3.onSuccess || null;
    }
  } else if (arg1 && typeof arg1 === 'object') {
    // Object call: handleCardFormSubmit({ containerElement, action, ... })
    containerElement = arg1.containerElement;
    action = arg1.action || {};
    defaultTarget = arg1.defaultTarget || '';
    defaultChannel = arg1.defaultChannel || 'whatsapp';
    defaultIntro = arg1.defaultIntro || defaultIntro;
    defaultSubject = arg1.defaultSubject || defaultSubject;
    onSuccess = arg1.onSuccess || null;
  }

  const fields = extractFormData(containerElement);

  // Validate required fields
  const missingRequired = fields.filter(f => f.required && (!f.value || f.value === '-'));
  if (missingRequired.length > 0) {
    const firstMissing = missingRequired[0];
    toast.error(`Mohon lengkapi isian "${firstMissing.label}" terlebih dahulu.`, 'Isian Wajib');
    firstMissing.element?.focus();
    return false;
  }

  // Determine Channel (whatsapp or email)
  const channel = action?.formChannel || action?.channel || (
    (action?.value && String(action.value).includes('@')) ? 'email' : defaultChannel
  );

  let targetValue = action?.value || action?.formTarget || action?.actionValue || defaultTarget || '';
  const introMessage = action?.message || action?.intro || defaultIntro;
  const emailSubject = action?.subject || action?.formSubject || action?.message || defaultSubject;

  // Build formatted text
  const fieldList = fields.map(f => `• *${f.label}*: ${f.value}`);
  const now = new Date();
  const dateFormatted = now.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  if (channel === 'whatsapp') {
    // Format WhatsApp message with markdown
    const fullMessage = [
      `*${introMessage}*`,
      '━━━━━━━━━━━━━━━━━━━━━━━',
      ...fieldList,
      '━━━━━━━━━━━━━━━━━━━━━━━',
      `📅 _Dikirim: ${dateFormatted} WIB_`,
    ].join('\n');

    let cleanPhone = String(targetValue || '').replace(/\D+/g, '');
    if (cleanPhone.startsWith('0')) {
      cleanPhone = '62' + cleanPhone.slice(1);
    } else if (cleanPhone.startsWith('8')) {
      cleanPhone = '62' + cleanPhone;
    }

    // If still empty, try extracting phone number from user's filled inputs
    if (!cleanPhone) {
      const phoneField = fields.find(f => 
        f.element?.type === 'tel' || 
        f.label.toLowerCase().includes('whatsapp') || 
        f.label.toLowerCase().includes('kontak') || 
        f.label.toLowerCase().includes('nomor') ||
        f.label.toLowerCase().includes('phone') ||
        f.label.toLowerCase().includes('hp')
      );
      if (phoneField && phoneField.value && phoneField.value !== '-') {
        let userClean = String(phoneField.value).replace(/\D+/g, '');
        if (userClean.startsWith('0')) userClean = '62' + userClean.slice(1);
        else if (userClean.startsWith('8')) userClean = '62' + userClean;
        cleanPhone = userClean;
      }
    }

    const waUrl = cleanPhone
      ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(fullMessage)}`
      : `https://wa.me/?text=${encodeURIComponent(fullMessage)}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');
    toast.success('Formulir berhasil diproses! Mengarahkan ke WhatsApp...', 'Terkirim');

  } else if (channel === 'email') {
    // Format Email message
    const emailBody = [
      introMessage,
      '----------------------------------------',
      ...fields.map(f => `${f.label}: ${f.value}`),
      '----------------------------------------',
      `Dikirim: ${dateFormatted} WIB`,
    ].join('\n\n');

    let emailTarget = targetValue;
    if (!emailTarget) {
      const emailField = fields.find(f => 
        f.element?.type === 'email' || 
        f.label.toLowerCase().includes('email')
      );
      if (emailField && emailField.value && emailField.value !== '-' && emailField.value.includes('@')) {
        emailTarget = emailField.value;
      }
    }

    const finalEmailTarget = emailTarget || 'admin@example.com';
    const mailtoUrl = `mailto:${finalEmailTarget}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoUrl;
    toast.success('Formulir berhasil diproses! Membuka aplikasi Email...', 'Terkirim');
  }

  if (typeof onSuccess === 'function') {
    onSuccess();
  }

  return true;
}
