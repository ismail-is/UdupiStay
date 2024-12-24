import React from 'react'


const FunFact = (props) => {

    const funfact = [
        {
            title: '6',
            subTitle: 'Homestays',
        },
        {
            title: '2,000+ ',
            subTitle: 'Families Hosted',
        },
        {
            title: '100%',
            subTitle: 'Privacy Ensured ',
        },
        {
            title: '100%',
            subTitle: 'Satisfaction',
        },


    ]


    return (

        <section className={`wpo-fun-fact-section pb-120 ${props.fnClass}`} style={{marginTop:'30px',marginBottom:'-100px'}}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-fun-fact-grids clearfix">
                            {funfact.map((funfact, fitem) => (
                                <div className="grid" key={fitem}>
                                    <div className="info">
                                        <h3>{funfact.title}</h3>
                                        <p>{funfact.subTitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FunFact;