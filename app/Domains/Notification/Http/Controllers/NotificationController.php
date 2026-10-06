<?php

namespace App\Domains\Notification\Http\Controllers;

use App\Domains\Notification\Models\Notification;
use App\Domains\Shared\Http\Controllers\ApiController;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class NotificationController extends ApiController
{
    /**
     * Get user notifications with unread count.
     */
    public function index(Request $request): JsonResponse
    {
        $user = $request->user();

        $notifications = Notification::where('user_id', $user->id)
            ->latest()
            ->take(30)
            ->get()
            ->map(fn ($n) => [
                'id'                   => $n->id,
                'judul'                => $n->judul,
                'pesan'                => $n->pesan,
                'tipe'                 => $n->tipe,
                'dibaca'               => $n->dibaca,
                'created_at'           => $n->created_at?->toIso8601String(),
                'created_at_formatted' => $n->created_at?->diffForHumans() ?? $n->created_at?->format('d M Y, H:i'),
            ]);

        $unreadCount = Notification::where('user_id', $user->id)
            ->where('dibaca', false)
            ->count();

        return $this->success([
            'notifications' => $notifications,
            'unread_count'  => $unreadCount,
        ], 'Notifications retrieved successfully');
    }

    /**
     * Mark single notification as read.
     */
    public function markAsRead(Request $request, int $id): JsonResponse
    {
        $user = $request->user();

        $notification = Notification::where('user_id', $user->id)->findOrFail($id);
        $notification->update(['dibaca' => true]);

        return $this->success(null, 'Notification marked as read');
    }

    /**
     * Mark all notifications for the user as read.
     */
    public function markAllAsRead(Request $request): JsonResponse
    {
        $user = $request->user();

        Notification::where('user_id', $user->id)
            ->where('dibaca', false)
            ->update(['dibaca' => true]);

        return $this->success(null, 'All notifications marked as read');
    }
}
