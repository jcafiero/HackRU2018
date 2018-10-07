import React, { Component } from 'react';



class DataContainer extends Component {
    iterateJSON = (data) => {
        let ret = [];
        for(let company in data) {
            ret.push(<tr className="">data[company]</tr>)
            for(let job in data[company]) {
                ret.push(<tr key={`${company}/${job}`}>data[company][job]</tr>)
            }
        }
        return ret;
    }

    render() {
        const { data } = this.props;
        return (
            <div className="container">
                <table>
                    <thead>List of Applicable jobs</thead>
                    <tbody>
                        {
                            this.iterateJSON(data)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default DataContainer;
