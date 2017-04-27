<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

namespace database\seeds;


use App\Entities\Invoice;
use App\Entities\Order;
use Illuminate\Database\Seeder;

class InvoicesTableSeeder extends Seeder {
    public function run() {
        $orders = Order::all();
        foreach ($orders as $order) {
            factory(Invoice::class)->create(
                [
                    'order_id' => $order->id,
                    'created_at' => $order->created_at,
                    'updated_at' => $order->updated_at
                ]
            );
        }
    }
}