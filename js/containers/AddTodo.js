/**
 * Created by zhongpeng on 2018/9/25.
 */
import React, {Component} from 'react'
import {
  View,
  TextInput,
  Button,
} from 'react-native'
import {connect} from 'react-redux'
import {addTodo} from '../actions'
import {ToastAndroid} from 'react-native';

class AddTodo extends Component {

  constructor(props) {
    super(props);
    this.inputValue = '';
    this.dispatchText = this.dispatchText.bind(this);
  }

  render() {

    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          style={{flex: 1, textAlign: 'center'}}
          onChangeText={text => this.inputValue = text}
        />
        <Button style={{height: 200}} title="Add to Todo" onPress={ this.dispatchText }/>
      </View>
    )
  }

  dispatchText() {
    if (this.inputValue.trim() != '') {
      this.props.dispatch(addTodo(this.inputValue));
    } else {
      ToastAndroid.show("input cannot be empty", ToastAndroid.SHORT);
    }
  }
}

export default connect()(AddTodo)