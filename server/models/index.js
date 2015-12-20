var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
    	var sql = "select messages.id, messages.text from messages \
    								left outer join on (messages.room_id = rooms.id) \
    								left outer join on (messages.user_id = users.id \
    								order by messages.id desc";
    	db.query(sql, function(err, result){
    		callback(result);
    	});
    }, 
    post: function (params, callback) {
    	var sql = "insert into messages (id, text, room_id, user_id) \
    					   values (?,?,?,?)";
    	db.query(sql, params, function(err, result){
    		callback(result);
    	});
    } 
  },

  users: {
    get: function (callback) {
    	var sql = "select * from users";
    	db.query(sql, function(err, result){
    		callback(result);
    	});
    },
    post: function (params, callback) {
    	var sql = "insert into users (username) values (?)";
    	db.query(sql, params, function(err, result){
    		callback(result);
    	});
    }
  }
};

