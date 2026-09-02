<?php

namespace App\Domains\Billing\Http\Controllers;

use App\Domains\Billing\Models\Transaction;
use App\Domains\Billing\Resources\TransactionResource;
use App\Domains\Billing\Services\BillingService;
use App\Domains\Shared\Http\Controllers\BaseController;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * AdminTransactionController
 *
 * Endpoint Laporan & Monitoring Transaksi Admin.
 */
class AdminTransactionController extends BaseController
{
    public function __construct(
        protected BillingService $billingService
    ) {}

    /**
     * Get all transactions with statistics, search, filter, and pagination.
     * GET /api/v1/admin/transactions
     */
    public function index(Request $request): JsonResponse
    {
        $query = Transaction::with(['user', 'pricelist']);

        // Search by invoice_number, order_id, user name, or email
        if ($search = $request->string('search')->trim()->toString()) {
            $query->where(function ($q) use ($search) {
                $q->where('invoice_number', 'like', "%{$search}%")
                    ->orWhere('order_id', 'like', "%{$search}%")
                    ->orWhereHas('user', function ($uq) use ($search) {
                        $uq->where('name', 'like', "%{$search}%")
                            ->orWhere('email', 'like', "%{$search}%");
                    });
            });
        }

        // Filter by status
        if ($status = $request->string('status')->trim()->toString()) {
            $query->where('status', $status);
        }

        $transactions = $query->latest('id')->paginate($request->integer('per_page', 15));
        $metrics = $this->billingService->getAdminMetrics();

        return $this->success([
            'metrics' => $metrics,
            'data' => TransactionResource::collection($transactions),
            'pagination' => [
                'current_page' => $transactions->currentPage(),
                'last_page' => $transactions->lastPage(),
                'total' => $transactions->total(),
                'per_page' => $transactions->perPage(),
            ],
        ], 'Daftar transaksi admin berhasil diambil.');
    }
}
