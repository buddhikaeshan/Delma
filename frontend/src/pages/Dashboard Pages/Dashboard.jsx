import SideBar from '../../components/SideBar/SideBar'
import Panel from '../../components/Panel'


function Dashboard() {
  return (
    <div className='d-flex'>
      <SideBar />
      <div className="flex-grow-1 p-3">
        <h2>Dashboard</h2>

        <div class="flex flex-1 p-4">

          <main class="flex-1 grid grid-cols-3 gap-4 ml-4">

            <Panel
              title={"Rooms"}
              num={'8'}
              para={'buddika pa'}
              bgColor="bg-gradient-to-r from-blue-400 to-green-500 "
            />

            <Panel
              title={"Bookings"}
              num={'45,6334'}
              para={'Decreased by 10%'}
              bgColor="bg-gradient-to-r from-blue-400 to-cyan-500"
            />



            <div class="bg-gradient-to-r from-green-400 to-teal-500  rounded-lg p-4">
              <h2 class="text-xl font-semibold">Customers</h2>
              <p class="text-2xl">10,000</p>
              <p class="text-sm text-muted-foreground">Increased by 60%</p>
            </div>


            <div class="bg-gradient-to-r from-blue-400 to-cyan-900 rounded-lg p-4">
              <h2 class="text-xl font-semibold">Visitors </h2>
              <p class="text-2xl">95,5741</p>
              <p class="text-sm text-muted-foreground">Increased by 5%</p>
            </div>


            <div class="bg-gradient-to-r  from-green-400 to-teal-500  rounded-lg p-4">
              <h2 class="text-xl font-semibold">Income</h2>
              <p class="text-2xl">$ 15,000</p>
              <p class="text-sm text-muted-foreground">Increased by 60%</p>
            </div>


            <div class="bg-gradient-to-r from-yellow-400 to-teal-500 rounded-lg p-4">
              <h2 class="text-xl font-semibold">Visitors </h2>
              <p class="text-2xl">95,5741</p>
              <p class="text-sm text-muted-foreground">Increased by 5%</p>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Dashboard