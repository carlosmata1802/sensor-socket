const unity = 10; 

const getOpacity = (uni, indx, elements) => (+uni === 0 && indx === 0) ? 0 : 1;

const Meter = ({ form }) => {
    const getDashArray = ({ percent }) => {
        let d = 240 * 3.14;
        return d
    }
    const getDashoffset = (percent) => {
        let d = 240 * 3.14;
        return (d + (d * parseFloat(percent)) / 100)
    }
    const getTop = (value) => {
        return - Number(value) * 60;
    }
    return ( 
        <div className="col-md-8 mx-auto">
            <div className="w-75 mx-auto mt-3">
                <div className="card">
                    <div className="text-center">
                        <h3 className="text-white">HR</h3>
                        <div className="container-graphic">
                            <div className="graphic">
                                <div className="graphic-center">
                                    <svg>
                                        <circle
                                            val={form.humidity}
                                            cx="120"
                                            cy="120"
                                            r="120"
                                            width={'100%'}
                                            height={'100%'}
                                            fill='transparent'
                                            stroke={'#26B6EA'}
                                            strokeWidth="17"
                                            strokeLinecap="round"
                                            strokeDasharray={getDashArray(form.percent ||  0)}
                                            strokeDashoffset={-getDashoffset(form.percent || 0)}
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <div className="d-flex containerClock overflow-hidden">
                                        {form.humidity && form.humidity.map((uni, index) => (
                                            <div className="value" key={index}>
                                                <ul className="scrollable" style={{ top: getTop(uni), opacity: getOpacity(uni, index) }}>
                                                    {Array.from(Array(unity).keys()).map((elem, indx) => (
                                                        <li key={indx}>
                                                            <p className="total">{index == 2 ? `${elem}.` : elem}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                        <div className="value">
                                            <ul className="scrollable">
                                                <li>
                                                    <p className="total"><span>%</span></p>
                                                </li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                    <p className="type">Current Humidity</p>
                                </div>
                                <img className="img-fluid" src="/drop.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                body {
                    background-color: #000;
                }
                svg {
                    width: 260px;
                    height: 260px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%) rotate(-90deg);
                }
                svg circle {
                    cursor: pointer;
                    transition: all 2s;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(10px, 10px);
                }
                .graphic {
                    position: relative;
                    width: 250px;
                    height: 250px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid #1d1d1d;
                    border-radius: 50%; 
                }
                .graphic p {
                    margin: 0;
                }
                div + img {
                    width: 25px; 
                    position: absolute; 
                    top: 25%; 
                }
                .graphic-center {
                    width: 222px;
                    height: 222px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    background-color: rgba(36, 182, 234,.25);
                    transform: translate(-50%,-50%);
                    border-radius: 50%;
                    box-shadow: 0 0px 29px -12px #26B6EA;
                    opacity: .5;
                    border: 1px solid #1d1d1d;
                }
                .container-graphic{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 2rem 0; 
                }
                .card {
                    background-color: transparent;
                }
                .total {
                    color: #26B6EA;
                    font-size: 40px;
                    font-weight: bolder; 
                }
                .total span {
                    font-size: 25px;
                }
                .type {
                    color: #26B6EA;
                    font-size: 15px;
                }
                .containerClock {
                    height: 60px;
                }
                .scrollable {
                    position: relative;
                    transition: all 2s;
                    list-style: none; 
                    padding: 0;
                }
            `}
            </style>
        </div>
     );
}
 
export default Meter;