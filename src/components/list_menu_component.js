import React from 'react'

const ListMenuComponent = () => {
  return (
    <div className='constainer'>
        <div className="btn-group flex-wrap" id='menu' role="group" aria-label="Basic example">
            <button type="button" className="btn btn-light" id='game_room'><span
                className="material-icons">sports_esports</span>
                Game Room</button>
            <button type="button" className="btn btn-light" id='yard'><span
                className="material-icons">deck</span>
                Yard</button>
            <button type="button" className="btn btn-light" id='dining_room'><span
                className="material-icons">restaurant_menu</span>
                Dining</button>
            <button type="button" className="btn btn-light" id='kitchen'><span
                className="material-icons">kitchen</span>
                Kitchen</button>
            <button type="button" className="btn btn-light" id='basement'><span
                className="material-icons">inventory_2</span>
                Basement</button>
            <button type="button" className="btn btn-light" id='cellar'><span
                className="material-icons">liquor</span>
                Cellar</button>
            <button type="button" className="btn btn-light" id='bedroom'><span
                className="material-icons">bed</span>
                Bedoom</button>
            <button type="button" className="btn btn-light" id='garage'><span
                className="material-icons">warehouse</span>
                Garage</button>
            <button type="button" className="btn btn-light" id='living_room'><span
                className="material-icons">chair</span>
                Living Room</button>
            <button type="button" className="btn btn-light" id='workspace'><span
                className="material-icons">business_center</span>
                Workspace</button>
            <button type="button" className="btn btn-light" id='settings'><span className="material-icons">tune</span>
            </button>
        </div>
    </div>
  )
}

export default ListMenuComponent