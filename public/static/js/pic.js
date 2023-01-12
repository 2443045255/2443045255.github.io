//随机图片
var bodyBgs = [];
bodyBgs[0] = "static/image/index1.jpg";
bodyBgs[1] = "static/image/index2.jpg";
bodyBgs[2] = "static/image/index3.jpg";
bodyBgs[3] = "static/image/index4.jpg";
bodyBgs[4] = "static/image/index5.jpg";
bodyBgs[5] = "static/image/index6.jpg";
bodyBgs[6] = "static/image/index7.jpg";
var randomBgIndex = Math.round( Math.random() * 6 );
document.write('<style>.sun1{background:url(' + bodyBgs[randomBgIndex] + ') no-repeat 50% 0}</style>');
