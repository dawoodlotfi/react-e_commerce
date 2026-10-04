import { useQuery } from "@tanstack/react-query"
import { GetOrders } from "./getAllOrders"

export default function Orders() {

let {data} =useQuery({
    queryKey:['orders'],
    queryFn:GetOrders
})
console.log('dddddd',data)

  return (<>

  <div className="pt-22">
    <div className="flex flex-col ">
        {data?.data.map((item:any)=>
            
           <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 w-3/4 m-auto">
  <div className="bg-gradient-to-r from-chart-3 to-indigo-600 rounded-xl p-4 mb-4 text-white">
    <p className="text-sm opacity-90">Total Price</p>
    <p className="text-3xl font-bold">{item.totalOrderPrice} EGP</p>
  </div>
  
  <div className="grid grid-cols-2 gap-3">
    <div className="p-3 bg-gray-50 rounded-lg">
      <p className="text-xs text-gray-500 mb-1">Paid</p>
      <p className={`font-semibold ${item.isPaid ? 'text-green-600' : 'text-red-600'}`}>
        {item.isPaid ? 'Yes' : 'No'}
      </p>
    </div>
    <div className="p-3 bg-gray-50 rounded-lg">
      <p className="text-xs text-gray-500 mb-1">Delivered</p>
      <p className={`font-semibold ${item.isDelivered ? 'text-green-600' : 'text-yellow-600'}`}>
        {item.isDelivered ? 'Yes' : 'No'}
      </p>
    </div>
    <div className="col-span-2 p-3 bg-gray-50 rounded-lg">
      <p className="text-xs text-gray-500 mb-1">Payment Method</p>
      <p className="font-semibold text-blue-600 capitalize">{item.paymentMethodType}</p>
    </div>

    
  </div>
</div>



        )}

    </div>
  </div>

   

  </>
  )
}
