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
              para={'Increased by 5%'}
              bgColor="bg-gradient-to-r from-blue-400 to-green-500 "
            />

            <Panel
              title={"Bookings"}
              num={'45,6334'}
              para={'Decreased by 10%'}
              bgColor="bg-gradient-to-r from-blue-400 to-cyan-500"
            />

            <Panel
              title={"Customers"}
              num={'10,000'}
              para={'Increased by 60%'}
              bgColor="bg-gradient-to-r from-green-400 to-teal-500"
            />

            <Panel
              title={"Visitors"}
              num={'95,5741'}
              para={'Increased by 5%'}
              bgColor="bg-gradient-to-r from-blue-400 to-cyan-900"
            />

            <Panel
              title={"Income"}
              num={'95,5741'}
              para={'Increased by 60%'}
              bgColor="bg-gradient-to-r  from-green-400 to-teal-500 "
            />

            <Panel
              title={"Visitors"}
              num={'15,000'}
              para={'Increased by 5%'}
              bgColor="bg-gradient-to-r from-yellow-400 to-teal-500 "
            />
          </main>
        </div>
      </div>
    </div>
  )
}

export default Dashboard