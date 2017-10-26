import React, {Component} from 'react';
import 'animate.css/animate.min.css'

import './item.scss';
export default class Item extends Component{

    moveLeft(key, e){
      let target = e.target;
      this.props.moveLeft(key);

      new Promise((resolve, reject) => {
          target.addEventListener('webkitAnimationEnd',  (e) => {
              // console.log(index);
              this.props.deleteItem(key);

              resolve();
          })
      }).then(() => {

          console.log('下一个动画');
      })

    }

    render(){
        let {items} = this.props;

        return (
            <div className = "container">
                {
                    items && items.map((item, index) => {
                        return (<div key={`${item.key}`}
                                    className={items[index].value === 0 ? "item" : "item animated fadeOutLeft"}
                                    onClick={this.moveLeft.bind(this, item.key)}>
                                    {`key:${item.key} value:${item.value}`}
                                </div>)
                    })
                }
            </div>
        )

    }
}