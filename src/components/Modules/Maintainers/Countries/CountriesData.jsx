import React, { Component} from 'react'

class CountriesData extends Component {

    box(item, index) {
        const key = `${item.name}${new Date().getTime()}`;

        return (
               <div key={key} className="col-lg-4" >
                 <div className="contact-box">
                 <div className="col-4" style={{border:1, color:"red"}}>
                     <img alt="" height="128" width="128" className="img-circle m-t-xs img-responsive" src={item.flag }></img> 
                 </div>
                    <div className="col-4">
                        <div className="text-center">
                              <div className="m-t-xs font-bold"> {item.name}</div>
                           </div>
                        </div>
                    <div className="col-4">
                         <h3><strong>{item.region}</strong></h3>
                         <p><i className="fa fa-map-marker"></i> {item.subregion }</p>
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
           
            <div className=" wrapper wrapper-content animated fadeInRight">
                <div className="row">
                {

                        data.map((item, index) => this.box(item, index))
                }
                </div>
                
            </div>
           
           
        )
    }
}



export default CountriesData;