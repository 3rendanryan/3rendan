/*

Reveal/Hide

Requires fsp.js



Created 2004-2006 by Joshua Paine <http://letterblock.com/>

Links are appreciated. Telling me when you use this is really appreciated.

Nothing is required: I hereby place the code contained in this file in

the public domain and disclaim any and all proprietary rights to it.



See <http://demo.fairsky.us/javascript/reveal_hide.html>

*/



var gViewRadios = new Array();

var gViewDisableHiddenFields = false;



function globalViewSetup()

{

    var d;

	if(document.getElementsByName && (d = document.getElementsByName('Fsp.View.DisableHiddenFields')) && (d = d[0]) && d.content.toLowerCase()=='true') gViewDisableHiddenFields = true;

}



function clickReveal(e)

{

	var id = revealHideGetId(this);

	var n = document.getElementById(id);

	if(n)

	{

		if(n.style.display!='none')

		{

			this.hideTarget = clickHide;

			this.hideTarget();

		}

		else

		{

			revealRadio(n);

			n.style.display = '';  // changed 'block' to ''

			disableFields(n);

			viewChain(n);

			togglePropagate(n);

		}

	}

	return false;

}



function clickHide(e)

{

	var id = revealHideGetId(this);

	var n = document.getElementById(id);

	if(n)

	{

		n.style.display = 'none';

		disableFields(n);

		viewChain(n);

		togglePropagate(n);

	}

	return false;

}



function viewChain(n)

{

	var c;

	if(n.style.display == 'none' && n.viewChain)

	{

		for(var x=0; x<n.viewChain.length; x++)

		{

			c = n.viewChain[x];

			if(c.style.display != 'none')

			{

				c.style.display = 'none';

				disableFields(c);

				viewChain(c);

				togglePropagate(c);

			}

		}

	}

	else if(n.viewChain)

	{

		for(var x=0; x<n.viewChain.length; x++)

		{

			c = n.viewChain[x];

			if(c.style.display=='none') // changed form of question to test for 'none' instead of !'block'

			{

				c.style.display = ''; // changed 'block' to ''

				disableFields(c);

				revealRadio(c);

				viewChain(c);

				togglePropagate(c);

			}

		}

	}

	viewOppose(n);

}



function viewOppose(n)

{

	var c;

	if(n.style.display == 'none' && n.viewOppose)

	{

		for(var x=0; x<n.viewOppose.length; x++)

		{

			c = n.viewOppose[x];

			if(c.style.display=='none') // changed form of question to test for 'none' instead of !'block'

			{

				c.style.display = ''; // changed 'block' to ''

				disableFields(c);

				viewChain(c);

				togglePropagate(c);

			}

		}

	}

	else if(n.viewOppose)

	{

		for(var x=0; x<n.viewOppose.length; x++)

		{

			c = n.viewOppose[x];

			if(c.style.display!='none')

			{

				c.style.display = 'none';

				disableFields(c);

				revealRadio(c);

				viewChain(c);

				togglePropagate(c);

			}

		}

	}

}



/*

function revealRadio(n)

{

	var radio, x;

	if(n.visRadio)

	{

		radio = gViewRadios[n.visRadio];

		for(x=0; x<radio.length; x++)

		{

			if(n!=radio[x] && radio[x].style.display != 'none')

			{

				radio[x].style.display = 'none';

				disableFields(radio[x]); 

				viewChain(radio[x]);

				togglePropagate(radio[x]);

			}

		}

	}

}

*/



function revealRadio(n)

{

	var i, radio, x;

	if(n.visRadios)

	{

		for(i=0; i<n.visRadios.length; i++)

		{

			radio = gViewRadios[n.visRadios[i]];

			for(x=0; x<radio.length; x++)

			{

				if(n!=radio[x] && radio[x].style.display != 'none')

				{

					radio[x].style.display = 'none';

					disableFields(radio[x]); 

					viewChain(radio[x]);

					togglePropagate(radio[x]);

				}

			}

		}

	}

}



function loadReveal()

{

	var id, winId, n;

	id = revealHideGetId(this);

	winId = revealHideGetId(window.location);;

	if(n = document.getElementById(id))

	{

		if(id==winId || n.className.indexOf('Fsp.ViewDefault')!=-1)

		{

			n.style.display = ''; // changed 'block' to ''

			disableFields(n);

			viewChain(n);

			togglePropagate(n);

		}

		else

		{

			n.style.display = 'none';

			disableFields(n);

			viewChain(n);

			togglePropagate(n);

		}

	}

}



function loadViewChain()

{

	var c, id, t;

	c = this.className;

	id = /ViewChain:(\S+)\b/.exec(c);

	if(id && id[1])

	{

		id = id[1];

		t = document.getElementById(id); 

		if(t) 

		{

			if(!t.viewChain) t.viewChain = new Array();

			t.viewChain[t.viewChain.length] = this;

		}

	}

}



function loadViewOppose()

{

	var c, id, t;

	c = this.className;

	id = /ViewOppose:(\S+)\b/.exec(c);

	if(id && id[1])

	{

		id = id[1];

		t = document.getElementById(id); 

		if(t) 

		{

			if(!t.viewOppose) t.viewOppose = new Array();

			t.viewOppose[t.viewOppose.length] = this;

		}

	}

}



function loadViewRadio()

{

	var c, re, radio, r, str;

	c = this.className;

	re = /ViewRadio:(\S+)\b/g;

	while(radio = re.exec(c))

	{

		radio = radio[1];

		if(!gViewRadios[radio]) gViewRadios[radio] = new Array();

		r = gViewRadios[radio];

		r[r.length] = this;

		this.visRadio = radio;

		if(!this.visRadios) this.visRadios = new Array();

		this.visRadios[this.visRadios.length] = radio;

	}

}



function revealHideGetId(a)

{

	var pound, id;

	pound = a.href.indexOf('#');

	id = a.href.substring(pound+1);

	return id;

}



function viewToggleClick(e)

{

	var n, bs;

	if(!e || !e.currentTarget) n = window.event.srcElement;

	else n = e.currentTarget;

	if(n.name && document.getElementsByName)

	{

		bs = document.getElementsByName(n.name);

		for(x = 0; x<bs.length; x++)

		{

			bs[x].viewToggle();

		}

	}

	else

	{

		n.viewToggle = viewToggle;

		n.viewToggle();

	}

}



function viewToggleLoad()

{

	var id, n;

	id = /ViewToggle:(\S+)\b/.exec(this.className);

	if(id && id[1] && (n = document.getElementById(id[1])))

	{

		this.viewToggleId = id[1];

		this.viewToggleNode = n;

		this.viewToggleReverse = (this.className.indexOf('ViewToggle.Reverse') > -1);

		if(!n.viewToggles) n.viewToggles = new Array();

		n.viewToggles[n.viewToggles.length] = this;

		this.viewToggle = viewToggle;

		this.viewToggle();

	}

}



function viewToggle()

{

	if(this.viewToggleId)

	{

		var reverse = this.viewToggleReverse;

		var n = this.viewToggleNode;

		if(n)

		{

			if((this.checked || reverse) && !(this.checked && reverse))

			{

				revealRadio(n);

				n.style.display = ''; // changed 'block' to ''

				disableFields(n);

				viewChain(n);

			}

			else

			{

				n.style.display = 'none';

				disableFields(n);

				viewChain(n);

			}

		}

	}

}



function togglePropagate(n)

{

	var t, vis, e;

	if(t = n.viewToggles)

	{

		vis = (n.style.display!='none'); // changed to test for !'none' instead of 'block'

		for(var x=0; x<t.length; x++)

		{

			if((vis || t[x].viewToggleReverse) && !(vis && t[x].viewToggleReverse))

				t[x].checked = true;

			else

				t[x].checked = false;

			e = new Object;

			e.currentTarget = t[x];

			viewToggleClick(e);

		}

	}

}



function disableFields(n)

{

	var t, f, x, y, disabled;

	if(gViewDisableHiddenFields)

	{

		if(n.style.display != 'none') disabled = false; // changed test to !'none' from 'block'

		else disabled = true;

		t = new Array('input','select','textarea');

		for(x = 0; x< t.length; x++)

		{

			f = n.getElementsByTagName(t[x]);

			for(y=0; y<f.length; y++)

			{

				f[y].disabled = disabled;

			}

		}

	}

}



document.register('body',null,globalViewSetup,'load',false);

document.register('*','ViewChain',loadViewChain,'load',false);

document.register('*','ViewOppose',loadViewOppose,'load',false);

document.register('*','ViewRadio',loadViewRadio,'load',false);

document.register('a','Reveal',clickReveal,'click',true);

document.register('a','Reveal',loadReveal,'load',false);

document.register('a','Hide',clickHide,'click',true);

document.register('input','ViewToggle',viewToggleClick,'click',false);

document.register('input','ViewToggle',viewToggleLoad,'load',false);