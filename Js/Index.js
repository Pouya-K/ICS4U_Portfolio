function emailCopy(){
			let codeText = "pouya.karimi@student.tdsb.on.ca";
			navigator.clipboard.writeText(codeText);
}
		function TxtType(element, toRotate, period) {
		    this.toRotate = toRotate;
		    this.el = element;
		    this.loopNum = 0;
		    this.period = parseInt(period, 10) || 2000;
		    this.txt = '';
		    this.isDeleting = false;

		    this.tick = function() {
		        var i = this.loopNum % this.toRotate.length;  // get which message should currently be displayed
		        var fullTxt = this.toRotate[i];  // get message

		        // increase and decrease string
		        if (this.isDeleting)
		            this.txt = fullTxt.substring(0, this.txt.length - 1);
		        else
		            this.txt = fullTxt.substring(0, this.txt.length + 1);

		        // update text
		        this.el.innerHTML = '<span>' + this.txt + '</span>';

		        var that = this;  // so element can be called within sub function
		        var delta = 200 - Math.random() * 100;

		        if (this.isDeleting)
		            delta /= 2;

		        if (!this.isDeleting && this.txt === fullTxt) {
		            delta = this.period;
		            this.isDeleting = true;
		        } else if (this.isDeleting && this.txt === '') {
		            this.isDeleting = false;
		            this.loopNum++;
		            delta = 500;  // pause when message fully typed
		        }

		        setTimeout(function() {
		            that.tick();  // tick consistently, pause when fully typed
		        }, delta);
		    }

		    this.tick();
		}

		window.onload = function() {
		    // create typewriter
		    var element = document.getElementById('typewriter');
		    var toRotate = element.getAttribute('data-type');
		    var period = element.getAttribute('data-period');
		    if (toRotate)
		        new TxtType(element, JSON.parse(toRotate), period);
		};


		// check if element is visible on screen
		function isElementInViewport(el) {
		    var rect = el.getBoundingClientRect();

		    return (
		        rect.top >= 0 &&
		        rect.left >= 0 &&
		        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
		        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
		    );
		}