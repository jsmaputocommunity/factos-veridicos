import React from 'react';

class Mostrar extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            facts : [] ,
            loading:true
        }
    }

      async componentDidMount() {

          const URL = 'http://127.0.0.1:8002/v1/data';
          const response = await fetch(URL);
          const json = await response.json();
          const facts =   json ;
          console.log(json ??'loading')
          this.setState({facts:facts , loading:false} )



      }


    render() {
        if(this.state.facts.length<=0){
            return (<div id="modal1" className="modal" style={{ display: "none" }}>
                <div className="overlay"></div>
                <div className="modal_content">

                    <h2>Ouse Duvidar</h2>


                    <p> Oops , nothing to show </p>



                    <button title="Close" className="close_modal">x</button>
                </div>
            </div>)
        }
        return (
            <div id="modal1" className="modal" style={{ display: "none" }}>
                <div className="overlay"></div>
                <div className="modal_content">

                    <h2>Ouse Duvidar</h2>


                    {this.state.loading  ? ( <p>Carregando ...</p> ) :  (<div>{this.state.facts.map(fact=>(
                       <div key={fact.id}>
                        <p>{fact.description}</p>
                       </div>
                        )

                    )}</div>)}

                    <button title="Close" className="close_modal">x</button>
                </div>
            </div>
        );
    }


}

export default Mostrar;
