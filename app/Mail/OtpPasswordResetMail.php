<?php

namespace App\Mail;

use App\Domains\User\Models\PasswordResetOtp;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

/**
 * OtpPasswordResetMail
 *
 * Sends a one-time password (OTP) to the user's email for password reset.
 */
class OtpPasswordResetMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct(protected PasswordResetOtp $otp)
    {
        //
    }

    /**
     * Get the message envelope definition.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Kode Reset Password - DataSoft',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.otp-password-reset',
            with: [
                'otpCode' => $this->otp->otp_code,
                'userName' => $this->otp->user?->name ?? $this->otp->email,
                'expiresAt' => $this->otp->expires_at->diffForHumans(),
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
