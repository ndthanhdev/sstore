<?php
/**
 * Created by vunguyenhung on 5/27/17
 */

namespace App\Http\Controllers;


use App\Repositories\InvoiceRepository;
use Illuminate\Http\Request;
use Laravel\Lumen\Routing\Controller;

class InvoiceController extends Controller {

    private $invoiceRepository;

    public function __construct(InvoiceRepository $invoiceRepository) {
        $this->invoiceRepository = $invoiceRepository;
    }


    public function show(Request $request, $invoiceId) {
        return $this->invoiceRepository->find($invoiceId);
    }

    public function store(Request $request) {
        $data = $request->all();

        $createdInvoice = $this->invoiceRepository->store($data['orderId']);

        return [
            'msg' => config('msg.INVOICE_CREATED'),
            'link' => [
                'name' => 'VIEW_INVOICE',
                'url' => route('invoices/{id}.GET', [
                    'id' => $createdInvoice->id,
                ]),
                'method' => 'GET'
            ]
        ];
    }

}