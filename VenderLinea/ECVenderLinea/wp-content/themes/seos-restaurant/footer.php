<?php
/**
 * The template for displaying the footer
 */

?>

	</div><!-- #content -->
	
	<?php if (get_theme_mod( 'social_media_activate' )) { echo seos_restaurant_social_section (); } ?>
	
	<footer id="colophon"  role="contentinfo" style="margin-top: 0%" >
	
		<div class="site-info">

				<?php esc_html_e('Todos los derechos reservados', 'seos-restaurant'); ?>  &copy; <?php bloginfo('name'); ?>
				<p><b>Direccion:</b> Calle 22B #12-59</p>						
				<p><b>Telefono: </b>xxx xxx xx xx</p>
				
			
		</div><!-- .site-info -->
		
	</footer><!-- #colophon -->
	
</div><!-- #page -->

	<?php echo seos_restaurant_back_to_top(); ?>
	
<?php wp_footer(); ?>

</body>
</html>
