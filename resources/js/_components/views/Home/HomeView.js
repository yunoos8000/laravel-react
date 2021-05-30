import React from 'react'

export default function HomeView(props) {

    const goToDashboard = (e, url)=>{
        props.props.history.push(url);
    }

    return (
        <main id="main-container">
  {/* Page Content */}
  <div className="content">
    <h2 className="content-heading">Button with Icons</h2>
    {/* Default */}
    <div className="block">
      <div className="block-header block-header-default">
        <h3 className="block-title">Default</h3>
      </div>
      <div className="block-content">
        <p className="mb-30">You can use any icon you like with your buttons! Prefer the ones that better represent the action of each button.</p>
        <div className="mb-10">
          <button type="button" onClick={e=> goToDashboard(e,'/user')} className="btn btn-outline-success mr-5 mb-5">
            <i className="fa fa-user mr-5" /> User
          </button>

          <button type="button" onClick={e=> goToDashboard(e,'/admin')} className="btn btn-outline-secondary mr-5 mb-5">
            <i className="fa fa-user-secret mr-5" />Admin
          </button>
        </div>

      </div>
    </div>
    {/* END Default */}

  </div>
  {/* END Page Content */}
</main>


    )
}
