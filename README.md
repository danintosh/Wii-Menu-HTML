# About this file
This file is intended to help the user understand the files and code behind this project

# 1-1: Files 
Here is a complete list of files and what they are for
* ``BG.png`` The main background image graphics
* ``back.png`` The back arrow graphic
* ``backhover.png`` The back arrow graphic when hovered
* ``bgm.wav`` The background music for index.html only
* ``bgm2.wav`` The background music for index1.html and index2.html only
* ``bottom.png`` The bottombar graphic
* ``clock.ttf`` The clock font
* ``cursor.png`` The cursor graphic
* ``empty.gif`` The empty channel animated graphic
* ``favico.png`` Favorite icon graphic for bookmarking
* ``forward.png`` The forward arrow graphic
* ``forwardhover.png`` The forward arrow graphic when hovered
* ``hover.js`` The JavaScript that makes the channel labels appear and disapear when hovered
* ``hover.wav`` The hover click sound used for all channels
* ``hoverchannel.wav`` The hover sound used for only available channels
* ``index.html`` The first page 
* ``index1.html`` A copy of the first page that plays different audio and is meant to load after pressing back on page 2
* ``index2.html`` The second page
* ``scroll.wav`` The scroll to next page sound
* ``style.css`` The StyleSheet code
* ``time.js`` The JavaScript that manages the date and time
* ``touch-icon-ipad-retina.png`` iOS homescreen icon for iPad Retnia
* ``touch-icon-ipad.png`` iOS homescreen icon for iPad
* ``touch-icon-iphone-retina.png`` iOS homescreen icon for iPhone Retina
* ``touch-icon-iPhone.png`` iOS homescreen icon for iPhone

# 1-2 CSS Classes
Here is a complete list of CSS Classes and what they are for
* ``@Font-Face``, ``main`` Loads the main Wii font aka ``main.ttf``
* ``@Font-Face``, ``clock`` Loads the clock font aka ``clock.ttf``
* ``body`` The main body of the html page
* ``a`` All link text
* 	``.grid-main`` The grid that holds all the channels for ``index.html`` and ``index1.html``
* 	``.grid-item2`` Aligns ``grid-main`` in ``index2.html``
* 	``.grid-main2`` The grid that holds all the channels for ``index2.html``
* ``.grid-channel``	Properties for the channel grid
* ``.grid-channel:hover``	Properties for the channel grid when hovered
* ``.grid-channellabel``	Properties for the channel label grids for all channels in the grid except the last one
* ``.grid-channelabel:hover``	Properties for the channel label grids when hovered for all channels in the grid except the last one
* ``.grid-channellabel2``	Properties for the channel label grids for the last channel
* ``.grid-channelabel2:hover``	Properties for the channel label grids the last channel
* ``.grid-back``	Properties for the channel grid
* ``.grid-back:hover``	Properties for the channel grid when hovered
* ``.grid-forward``	Properties for the channel grid
* ``.grid-forward:hover``	Properties for the channel grid when hovered
* ``.grid-backmob``	Properties for the channel grid for mobile
* ``.grid-backmob:hover``	Properties for the channel grid when hovered for mobile
* ``.grid-forwardmob``	Properties for the channel grid for mobile
* ``.grid-forwardmob:hover``	Properties for the channel grid when hovered for mobile
* ``.grid-bottombar`` CSS properties for the bottombar
* ``.clock`` Properties for the clock
* ``.date`` Properties for the date

# 2-1: JavaScript IDs
Here is a complete list of JavaScript IDs and what they are for
* ``hover`` For the hover click sound used for all channels 
* ``hoverchannel`` For the hover sound used for only available channels
* ``channellabel[1-8]`` For identifying each channel label. NOTE: you can add more channellabel but you will need to add the function to ``hover.js``
* ``clock`` For the time text
* ``date`` For the date text

# 2-2 JavaScript functions
Here is a complete list of JavaScript functions and what they are for
* ``gettime()`` Gets the time to match the time in Japan
* ``getdate()`` Gets the date to match the date in Japan
* ``hoverfx()`` makes ``hoverchannel`` play ``hover.wav`` whenever you hover on any channel
* ``hoverchanelfx[1-8]()`` makes ``hover`` play ``hover.wav`` makes ``hoverchannel`` play ``hoverchannel.wav`` and makes the channel label appear
* ``killlabel[1-8]()`` makes the channel label disappear 

# 3-1 Channels
* To make a working channel copy the code of any working channel and make sure to also include the ``channellabel``
* To make a working channel copy the code of any unavailable channel and make sure to also include the ``channellabel``
* To make a working channel copy the code of any empty channel

# 3-2 Channel Labels
* To create a new channel label copy the code for ``hoverchanelfx[1-12]()`` and ``killlabel[1-12]()`` and switch out the number and make sure it matches your new id
