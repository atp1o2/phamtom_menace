import React from 'react';

var ResultsView = React.createClass({

  render () {
    var collection = this.props.collection;
    var keys = Object.keys(collection[0]);
    var values = []
    for (var i in collection) {
      values.push(Object.values(collection[i]));
    }

    const headers = keys.map((key) =>
      <th>{key}</th>
    )

    const data = values.map((val) =>
      <tr>
        <td>{val}</td>
      </tr>
    )
    console.log(headers)
    console.log(data)


    return (
      <div className="mb-5">
        <h1>Results View</h1>
        <div>


          <table>
            <thead>
              <tr>
                {headers}
              </tr>
            </thead>
            <tbody>

              {data}

            </tbody>
          </table>




        </div>
      </div>
    );
  }
})

export default ResultsView;
