<!DOCTYPE HTML>
<html>
<head>
	<meta charset="UTF-8">
	<title>Local Storageを全て削除するやつ</title>
</head>
<body>
	<script type="text/javascript">
		var r = confirm("Local Storageを全て削除しますか？");
		if (r === true) {
			localStorage.clear();
			document.write("Local Storageを全て削除しました。");
		} else {
			document.write("キャンセルしました。");
		}
	</script>
</body>
</html>