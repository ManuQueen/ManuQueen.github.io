//console.log("connected");



function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Software Engineer.","am a Frontend Developer.", "am a Backend Developer.", "am a Full Stack Developer.", "am a Mobile Developer.", "am a Desktop Developer.", "love everything about code.", "also love designing.", "solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}
	typeAnimation();

$(document).ready(function($) {
  var words = [
			{
				text: "python",
				weight: 12.3
			}, {
				text: "css3",
				weight: 8
			}, {
				text: "javascript",
				weight: 14
			}, {
				text: "visual basic",
				weight: 3
			}, {
				text: "programming",
				weight: 7
			}, {
				text: "php",
				weight: 10
			}, {
				text: "java",
				weight: 10
			}, {
				text: "bootstrap",
				weight: 12
			}, {
				text: "ionic",
				weight: 7
			}, {
				text: "html5",
				weight: 8
			}, {
				text: "laravel",
				weight: 8
			}, {
				text: "design",
				weight: 10
			}, {
				text: "Adobe XD",
				weight: 14
			}
		];

  var some_words_with_same_weight =
    $("#jqcloud").jQCloud(words, {
      width: 1000,
      height: 450
    });

    	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 1120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 28; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}
	displayWordCloud();

});