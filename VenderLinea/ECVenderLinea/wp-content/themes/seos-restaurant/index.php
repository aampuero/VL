<?php
/**
 * The main template file

 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package All Purpose
 */

get_header(); ?>

<div id="content-center">

	<div id="primary" class="content-area">
	
		<main id="main" class="site-main" role="main">

		<?php
		if ( have_posts() ) :

			if ( is_home() && ! is_front_page() ) : ?>
				<header>
					<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
				</header>

			<?php
			endif;
			?>
		<?php 
		endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->
	
		
	</div>
	
	
</div>	

<?php get_footer();

