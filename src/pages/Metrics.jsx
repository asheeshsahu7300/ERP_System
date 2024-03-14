import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { VscCircle,VscCircleFilled } from "react-icons/vsc";
import { ProductsData,customersData,ordersData,pieChartData } from '../data/dummy';  
import { Stacked, Pie, Button, SparkLine } from '../components';
import { totalproducts,totalCustomers,totalorders,SparklineAreaData} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { Header } from '../components';


const Metrics = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl" >
      <Header category="Dashboard" title="Metrics" />
    <div className="mt-24">
       
   
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg hover:drop-shadow-xl h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
        
          <div className="flex justify-between items-center">
            <div>  
              <p className="font-bold text-gray-400"><button
              type="button"
              style={{ backgroundColor: currentColor,  }}
              className="text-2xl opacity-0.9 text-white drop-shadow-xl rounded-full  p-4 text-2xl"

            > 
              <BsCurrencyDollar />
            </button>&nbsp;&nbsp;&nbsp;<b>Earnings</b></p>
              <p className="text-2xl">
                <br></br>
                ${ordersData.map((it)=>(
                  it.TotalAmount
                )).reduce((a,b) => a + b).toFixed(2)}
                </p>
            </div>
            
          </div>
          <div className="mt-6">
           
          </div>
        </div>
        <div className="flex p-4 flex-wrap justify-center gap-1 items-center drop-shadow-xl ">
          {totalproducts.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{ProductsData.length}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center drop-shadow-xl">
          {totalorders.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{ordersData.length}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center drop-shadow-xl">
          {totalCustomers.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{customersData.length}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Product Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                <VscCircle />
                </span>
                <span>Products</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                <VscCircleFilled />
                </span>

                <span>Quantity</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className=" border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">{ordersData.length}</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    38%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Orders</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">{ordersData.map((it)=>(
                  Number(it.Quantity)
                )).reduce((a,b) => a + b)}</p>

                <p className="text-gray-500 mt-1">Quantity</p>
              </div>

              <div className="mt-5">
                <SparkLine currentColor={currentColor} id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={currentColor} />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div className='opacity-0.9 text-white hover:drop-shadow-xl rounded-full'>

              <Stacked  currentMode={currentMode} width="360px" height="390px" />
            </div>
          </div>
        </div>
        <div>
         

            <div className="mt-4">
          </div>
    
          <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                <VscCircle />
                </span><br></br>
                <span>Customers</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                <VscCircleFilled />
                </span>
<br></br>
                <span>Quantity</span>
              </p>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
          <div ><p className="text-2xl font-semibold "><span>Order Updates</span></p></div>
          
              <div className='opacity-0.9 text-white hover:drop-shadow-xl rounded-full brd'>
            
          
           
              
              <Pie id="pie-chart" data={pieChartData} legendVisiblity height="300px" /></div>
            
          </div>
        </div>
      </div>

      
           

        
       
           
          
        
          
         

          
          </div>
        </div>
      
  );
};

export default Metrics;
