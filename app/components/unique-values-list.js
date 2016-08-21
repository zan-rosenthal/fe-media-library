import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['collection', 'scroll-list', 'value-list'],
  uniqProp: undefined,
  valueList: Ember.computed('model', function(){
    const uniqProp = this.get('uniqProp');
    const valueList = [];
    const values = this.get('model').reduce((acc, curr)=>{
      if(acc[curr.get(uniqProp)]){
        acc[curr.get(uniqProp)]++
      }else{
        acc[curr.get(uniqProp)] = 1;
      }
      return acc;
    },{});
    for (var key in values){
      valueList.push({key:key, value:values[key]});
    };
    return valueList;
  })
});
