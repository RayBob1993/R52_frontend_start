<!-- Подвал -->
<footer class="footer">
	<div class="container">
		<!-- Меню снизу -->
		<nav class="bottomMenu">
			<ul class="list listFlex level1">
				<li class="active"><a href="">Главная</a></li>
				<li><a href="">О компании</a></li>
			</ul>
		</nav>
		
		<div class="row rowMiddle rowBetween">
			<div class="col">
				<a href="/" class="logo footerLogo">
					<img src="app/img/footerLogo.png" alt="" title="">
				</a>	
			</div>
			
			<div class="col">
				<!-- Контакты в подвале -->
				<div class="contacts footerContacts">
					<a href="tel: " class="tel"></a>
					<a href="mailto: " class="mail"></a>
				</div>
			</div>
			
			<div class="col">
				<a href="#" class="logo nameplate">
					<img src="app/img/nameplate.png" alt="">
				</a>	
			</div>
		</div>
	</div>
</footer>

<? 
	// Иконки
	echo file_get_contents('app/img/ico/icons.svg');
?>