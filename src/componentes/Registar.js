import React from 'react';

class Registar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '' ,
            success : 'Adicionar'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        this.setState({value: event.target.value});

    }

    handleSubmit(event) {


        this.setFact(this.state.value)
        event.preventDefault();
    }

    async setFact(text) {
        this.setState({success :  'Aguarde ... ! '})

        try {
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                // body:{desc:'my fact'}

            };
            const response = await fetch(`http://127.0.0.1:8002/v1/data?desc=${text}`, requestOptions);
            const data = await response.json();

            if (data.status) {
                this.setState({success: 'Inserido com sucesso ! '})
            } else {
                this.setState({success: 'Falha ao inserir  ! '})
            }

        }catch (e) {

            console.log(e)
            this.setState({success: 'Verifique a conexão com o servidor ! '})
        }


    }
 render() {
     return (
         <div id="modal2" className="modal" style={{ display: "none" }}>
             <div className="overlay"></div>
             <div className="modal_content">
                 <h2>Não Minta</h2>
                 <form id="factsForm" method="POST" action="#" onSubmit={this.handleSubmit}>
                     <textarea placeholder="Informe um facto" rows="2" cols="3" value={this.state.value} onChange={this.handleChange} />
                     <button type="submit" id="addButton">{this.state.success}</button>
                 </form>
                 <button title="Close" className="close_modal">x</button>
             </div>
         </div>
     );
 }


}

export default Registar;
