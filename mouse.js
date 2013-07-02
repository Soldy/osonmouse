            document.body.addEventListener('mousedown', function(event) {
                osonmousedetectdown(event);
            });

            document.body.addEventListener('mouseup', function(event) {
                osonmousedetectup(event);
            });

            var osonmouse = {
           	    posx : 0,
           	    posy : 0,
           	    oposx : 0,
           	    oposy : 0,
                deskoposx : 0,
           	    deskoposy : 0,
           	    deskposx : 0,
           	    deskposy : 0,
           	    endposx : 0,
           	    endposy : 0,
           	    endoposx : 0,
           	    endoposy : 0,
                enddeskoposx : 0,
           	    enddeskoposy : 0,
           	    enddeskposx : 0,
           	    enddeskposy : 0,
           	    startposx : 0,
           	    startposy : 0,
           	    startoposx : 0,
           	    startoposy : 0,
                startdeskoposx : 0,
           	    startdeskoposy : 0,
           	    startdeskposx : 0,
           	    startdeskposy : 0,
           	    fclickposx : 0,
           	    fclickposy : 0,
           	    lastclick : 0,
           	    currentclick : 0,
           	    catchin : 0,
                movedata : {
           	        posx : new Array,
           	        posy : new Array,
           	        oposx : new Array,
           	        oposy : new Array,
           	        deskoposx : new Array,
           	        deskoposy : new Array,
           	        deskposx : new Array,
           	        deskposy : new Array,
					     i : 0
           	    }
            }

            
            document.body.onmousemove=function(event) {
   	           osonmouse.oposx = event.pageX;
    	           osonmouse.oposy = event.pageY;
    	           osonmouse.posx = parseInt(osonmouse.oposx/osonfit.scale);
    	           osonmouse.posy = parseInt(osonmouse.oposy/osonfit.scale);
                 osonmouse.deskoposx = osonmouse.oposx - parseInt(osonfit.marginleft);
                 osonmouse.deskoposy = osonmouse.oposy - parseInt(osonfit.margintop);
                 osonmouse.deskposx = parseInt(osonmouse.deskoposx/osonfit.scale);
                 osonmouse.deskposy = parseInt(osonmouse.deskoposy/osonfit.scale);
                 osonpointer.p[0].oposx = osonmouse.oposx;
        	        osonpointer.p[0].oposy = osonmouse.oposy;
        	        osonpointer.p[0].posx = osonmouse.posx;
                 osonpointer.p[0].posy = osonmouse.posy;
                 osonpointer.p[0].deskposx = osonmouse.deskposx;
                 osonpointer.p[0].deskposy = osonmouse.deskposy;
                 osonpointer.p[0].deskoposx = osonmouse.deskoposx
                 osonpointer.p[0].deskoposy = osonmouse.deskoposy;
                 if(osonmouse.catchin === 1){
                 	   osonmousedetectmove();
                 }
            }; 
       
           function osonmousedetectdown(evt) {
           	   if (osontouch.active === 0) {
                   osonmouse.startoposx = osonmouse.oposx;
    	             osonmouse.startoposy = osonmouse.oposy;
    	             osonmouse.startposx = osonmouse.posx;
    	             osonmouse.startposy = osonmouse.posy;
                   osonmouse.startdeskoposx = osonmouse.deskoposx;
                   osonmouse.startdeskoposy = osonmouse.deskoposy;
                   osonmouse.startdeskposx = osonmouse.deskposx;
                   osonmouse.startdeskposy = osonmouse.deskposy;
                   osonmouse.catchin = 1;
                   if(osonpointer.setup.onoff === 1){
            	        osonpointer.p[0].startoposx = osonmouse.startoposx;
            	        osonpointer.p[0].startoposy = osonmouse.startoposy;
            	        osonpointer.p[0].startposx = osonmouse.startposx;
            	        osonpointer.p[0].startposy = osonmouse.startposy;
                       osonpointer.p[0].startdeskoposx = osonmouse.startdeskoposx;
                       osonpointer.p[0].startdeskoposy = osonmouse.startdeskoposy;
                       osonpointer.p[0].startdeskposx = osonmouse.startdeskposx;
                       osonpointer.p[0].startdeskposy = osonmouse.startdeskposy;                   	
                   }
               } else {
                   osontouch.active = 0;
               }
               osonpointerdetectstart();
           }

           function osonmousedetectclick(evt) {
           	   if (osontouch.active === 0) {
           	       osonmouse.currentclick = new Date().getTime() ;
           	       if (osonmouse.currentclick > osonmouse.lastclick+200 ){
                       osonmouse.clickoposx = osonmouse.oposx;
                       osonmouse.clickoposy = osonmouse.oposy;
                       osonmouse.clickposx = osonmouse.posx;
                       osonmouse.clickposy = osonmouse.posy;
                       osonmouse.clickdeskoposx = osonmouse.deskoposx;
                       osonmouse.clickdeskoposy = osonmouse.deskoposy;
                       osonmouse.clickdeskposx = osonmouse.deskposx;
                       osonmouse.clickdeskposy = osonmouse.deskposy;
                       osonmouse.lastclick = osonmouse.currentclick;

                   }
               }
           }

           function osonmousedetectmove() {

               osonmouse.movedata.i++;
               osonmouse.movedata.oposx[osonmouse.movedata.i] = osonmouse.oposx;
            	osonmouse.movedata.oposy[osonmouse.movedata.i] = osonmouse.oposy;
            	osonmouse.movedata.posx[osonmouse.movedata.i] = osonmouse.posx;
            	osonmouse.movedata.posy[osonmouse.movedata.i] = osonmouse.posy;
            	osonmouse.movedata.deskoposx[osonmouse.movedata.i] = osonmouse.deskoposx;
            	osonmouse.movedata.deskoposy[osonmouse.movedata.i] = osonmouse.deskoposy;
            	osonmouse.movedata.deskposx[osonmouse.movedata.i] = osonmouse.deskposx;
               osonmouse.movedata.deskposy[osonmouse.movedata.i] = osonmouse.deskposy;
               if(osonpointer.setup.onoff === 1){
                       osonpointer.p[0].oposx = osonmouse.oposx;
            	        osonpointer.p[0].oposy = osonmouse.oposy;
            	        osonpointer.p[0].posx = osonmouse.posx;
                       osonpointer.p[0].posy = osonmouse.posy;
            	        osonpointer.p[0].movedata.oposx[osonmouse.movedata.i] = osonmouse.oposx;
            	        osonpointer.p[0].movedata.oposy[osonmouse.movedata.i] = osonmouse.oposy;
            	        osonpointer.p[0].movedata.posx[osonmouse.movedata.i] = osonmouse.posx;
            	        osonpointer.p[0].movedata.posy[osonmouse.movedata.i] = osonmouse.posy;
                       osonpointer.p[0].movedata.deskoposx[osonmouse.movedata.i] = osonmouse.deskoposx;
                       osonpointer.p[0].movedata.deskoposy[osonmouse.movedata.i] = osonmouse.deskoposy;
                       osonpointer.p[0].movedata.deskposx[osonmouse.movedata.i] = osonmouse.deskposx;
                       osonpointer.p[0].movedata.deskposy[osonmouse.movedata.i] = osonmouse.deskposy;
                       osonpointer.p[0].movedata.i = osonmouse.movedata.i;               	
               }
               osonpointerdetectmove();      
           }

           function osonmousedetectup(evt) {
           	   if (osontouch.active === 0) {
           	       osonmouse.currentclick = new Date().getTime() ;
           	       if (osonmouse.currentclick > osonmouse.lastclick+200 ){
                       osonmouse.clickoposx = osonmouse.oposx;
                       osonmouse.clickoposy = osonmouse.oposy;
                       osonmouse.clickposx = osonmouse.posx;
                       osonmouse.clickposy = osonmouse.posy;
                       osonmouse.clickdeskoposx = osonmouse.deskoposx;
                       osonmouse.clickdeskoposy = osonmouse.deskoposy;
                       osonmouse.clickdeskposx = osonmouse.deskposx;
                       osonmouse.clickdeskposy = osonmouse.deskposy;
                       osonmouse.lastclick = osonmouse.currentclick;
                       osonmouse.catchin = 0;
            	        if(osonpointer.setup.onoff === 1){
            	            osonpointer.p[0].clickoposx = osonmouse.endoposx;
            	            osonpointer.p[0].clickoposy = osonmouse.endoposy;
            	            osonpointer.p[0].clickposx = osonmouse.endposx;
            	            osonpointer.p[0].clickposy = osonmouse.endposy;
                           osonpointer.p[0].clickdeskoposx = osonmouse.enddeskoposx;
                           osonpointer.p[0].clickdeskoposy = osonmouse.enddeskoposy;
                           osonpointer.p[0].clickdeskposx = osonmouse.enddeskposx;
                           osonpointer.p[0].clickdeskposy = osonmouse.enddeskposy;
            	                      	         	
            	        }
                   }
                   osonmouse.endoposx = osonmouse.oposx;
                   osonmouse.endoposy = osonmouse.oposy;
                   osonmouse.endposx = osonmouse.posx;
                   osonmouse.endposy = osonmouse.posy;
                   osonmouse.enddeskoposx = osonmouse.deskoposx;
                   osonmouse.enddeskoposy = osonmouse.deskoposy;
                   osonmouse.enddeskposx = osonmouse.deskposx;
                   osonmouse.enddeskposy = osonmouse.deskposy;
                   if(osonpointer.setup.onoff === 1){
            	        osonpointer.p[0].endoposx = osonmouse.endoposx;
            	        osonpointer.p[0].endoposy = osonmouse.endoposy;
            	        osonpointer.p[0].endposx = osonmouse.endposx;
            	        osonpointer.p[0].endposy = osonmouse.endposy;
                       osonpointer.p[0].enddeskoposx = osonmouse.enddeskoposx;
                       osonpointer.p[0].enddeskoposy = osonmouse.enddeskoposy;
                       osonpointer.p[0].enddeskposx = osonmouse.enddeskposx;
                       osonpointer.p[0].enddeskposy = osonmouse.enddeskposy;                   	
                   }
               } else {
                   osontouch.active = 0;
               }
               osonpointerdetectend();
           }
