// 所有路由接口
const user = require('./user');
const article = require('./article');
const comment = require('./comment');
const tag = require('./tag');
const message = require('./message');
const link = require('./link');
const category = require('./category');
const timeAxis = require('./timeAxis');
const project = require('./project');

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
	
	// 留言相关操作
	app.post('/addMessage', message.addMessage);
	app.post('/addReplyMessage', message.addReplyMessage);
	app.post('/delMessage', message.delMessage);
	app.post('/getMessageDetail', message.getMessageDetail);
	app.get('/getMessageList', message.getMessageList);
	
	// 链接操作
	app.post('/addLink', link.addLink);
	app.post('/updateLink', link.updateLink);
	app.post('/delLink', link.delLink);
	app.get('/getLinkList', link.getLinkList);
	
	// 分类操作
	app.post('/addCategory', category.addCategory);
	app.post('/delCategory', category.delCategory);
	app.get('/getCategoryList', category.getCategoryList);
	
	// 时间轴操作
	app.post('/addTimeAxis', timeAxis.addTimeAxis);
	app.post('/updateTimeAxis', timeAxis.updateTimeAxis);
	app.post('/delTimeAxis', timeAxis.delTimeAxis);
	app.get('/getTimeAxisList', timeAxis.getTimeAxisList);
	app.post('/getTimeAxisDetail', timeAxis.getTimeAxisDetail);
	
	// 项目操作
	app.post('/addProject', project.addProject);
	app.post('/updateProject', project.updateProject);
	app.post('/delProject', project.delProject);
	app.get('/getProjectList', project.getProjectList);
	app.post('/getProjectDetail', project.getProjectDetail);
}