var list = []

function sortAscend(num1, num2) {
  return num1 - num2
};


module.exports = {

  getNum: function(num) {
    list.push(num);
    //return num;
  },

  sortedList: function() {
    list.sort(sortAscend);
    return list;
  }
};








