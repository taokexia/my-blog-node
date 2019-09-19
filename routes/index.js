// 所有路由接口
const user = require('./user');
const article = require('./article');
const comment = require('./comment');
const tag = require('./tag');

module.exports = app => {
	// 用户相关操作
	app.post('/login', user.login);
	app.post('/logout', user.logout);
	app.post('/loginAdmin', user.loginAdmin);
	app.post('/register', user.register);
	app.post('/delUser', user.delUser);
	// app.post('/getUser', user.getUser);
	app.get('/currentUser', user.currentUser);
	app.get('/getUserList', user.getUserList);
	
	// 文章相关操作
	app.post('/addArticle', article.addArticle);
	app.post('/updateArticle', article.updateArticle);
	app.post('/delArticle', article.delArticle);
	app.get('/getArticleList', article.getArticleList);
	app.get('/getArticleListAdmin', article.getArticleListAdmin);
	app.post('/getArticleDetail', article.getArticleDetail);
	app.post('/likeArticle', article.likeArticle);
	
	// 评论相关操作
	app.post('/addComment', comment.addComment);
	app.post('/addThirdComment', comment.addThirdComment);
	app.post('/changeComment', comment.changeComment);
	app.post('/changeThirdComment', comment.changeThirdComment);
	app.get('/getCommentList', comment.getCommentList);
	
	// 标签相关操作
	app.post('/addTag', tag.addTag);
	app.post('/delTag', tag.delTag);
	app.get('/getTagList', tag.getTagList);
}