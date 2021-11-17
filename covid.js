import React, { useEffect, useState } from 'react';
import Navhome from "./navhome";
import Sidebar from "./sidebar";



const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();

            setData(actualData.statewise); 

        } catch (err) {
            //console.log(err);
        }

    }

    useEffect(() => {
        getCovidData();
    }, [])

              data.forEach(element => {
               //console.log(`confirm cases ${element.confirmed} active cases ${element.active}  `)
                });
                console.log(data);


    //  data.map(value => {
    //     console.log('element',value.active)
    //  })


    return (
        <>
            <Navhome />

            <h2 className="covid"> covid19 Covid Tracker</h2>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <Sidebar />
                        </div>

                        <div className="col-md-9">
                            {
                                data.map(value => {
                                   return (
                                       <>
                                        <div className="flexbox_container">
                                            <div className="flexbox-item">
                                                confirmed
                                                <p className="card_data"> {value.confirmed}</p>
                                            </div>
                                        
                                            <div className="flexbox-item">
                                                Active:
                                                <p className="card_data"> {value.active}</p>
                                            </div>
                                        </div>
                                       </>
                                   ) 
                                    
                                })
                            }
                            
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Covid;