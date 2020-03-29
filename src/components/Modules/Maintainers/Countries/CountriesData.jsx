import React, { Component} from 'react'

class CountriesData extends Component {

    box(item, index) {
        const key = `${item.name}${new Date().getTime()}`;

        return (
               <div key={key} className="col-lg-4" >
                 <div className="contact-box">
                    <div className="col-sm-4">
                        <div className="text-center">
                           {/* <img alt="" className="img-circle m-t-xs img-responsive" src={item.flag }></img> */}
                              <div className="m-t-xs font-bold"> {item.name}</div>
                           </div>
                        </div>
                    <div className="col-sm-8">
                         <h3><strong>{item.region}</strong></h3>
                         <p><i className="fa fa-map-marker"></i> {item.subregio }</p>
                    </div>
                    <div className="clearfix"></div>
                 </div>
                </div>
        )
    }

    render() {

        const {
            data,
          } = this.props;

        
        return (
           
            <div className="row wrapper wrapper-content animated fadeInRight">
                 {

                     data.map((item, index) => this.box(item, index))
                 }
            </div>
           
           
        )
    }
}



export default CountriesData;