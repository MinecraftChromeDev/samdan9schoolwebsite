// Created by iWeb 3.0.4 local-build-20200505

setTransparentGifURL("Media/transparent.gif");
function applyEffects() {
  var registry = IWCreateEffectRegistry();
  registry.registerEffects({
    shadow_3: new IWShadow({
      blurRadius: 4,
      offset: new IWPoint(1.4142, 1.4142),
      color: "#000000",
      opacity: 0.5,
    }),
    shadow_4: new IWShadow({
      blurRadius: 4,
      offset: new IWPoint(1.4142, 1.4142),
      color: "#000000",
      opacity: 0.5,
    }),
    stroke_0: new IWStrokeParts(
      [
        {
          rect: new IWRect(-1, 1, 2, 181),
          url: "about_the_item_files/stroke.png",
        },
        {
          rect: new IWRect(-1, -1, 2, 2),
          url: "about_the_item_files/stroke_1.png",
        },
        {
          rect: new IWRect(1, -1, 298, 2),
          url: "about_the_item_files/stroke_2.png",
        },
        {
          rect: new IWRect(299, -1, 2, 2),
          url: "about_the_item_files/stroke_3.png",
        },
        {
          rect: new IWRect(299, 1, 2, 181),
          url: "about_the_item_files/stroke_4.png",
        },
        {
          rect: new IWRect(299, 182, 2, 3),
          url: "about_the_item_files/stroke_5.png",
        },
        {
          rect: new IWRect(1, 182, 298, 3),
          url: "about_the_item_files/stroke_6.png",
        },
        {
          rect: new IWRect(-1, 182, 2, 3),
          url: "about_the_item_files/stroke_7.png",
        },
      ],
      new IWSize(300, 184)
    ),
    shadow_2: new IWShadow({
      blurRadius: 4,
      offset: new IWPoint(1.4142, 1.4142),
      color: "#000000",
      opacity: 0.5,
    }),
    shadow_0: new IWShadow({
      blurRadius: 4,
      offset: new IWPoint(1.4142, 1.4142),
      color: "#000000",
      opacity: 0.5,
    }),
    shadow_1: new IWShadow({
      blurRadius: 4,
      offset: new IWPoint(1.4142, 1.4142),
      color: "#000000",
      opacity: 0.5,
    }),
  });
  registry.applyEffects();
}
function hostedOnDM() {
  return false;
}
function onPageLoad() {
  loadMozillaCSS("about_the_item_files/about_the_itemMoz.css");
  adjustLineHeightIfTooBig("id1");
  adjustFontSizeIfTooBig("id1");
  adjustLineHeightIfTooBig("id2");
  adjustFontSizeIfTooBig("id2");
  adjustLineHeightIfTooBig("id3");
  adjustFontSizeIfTooBig("id3");
  adjustLineHeightIfTooBig("id4");
  adjustFontSizeIfTooBig("id4");
  adjustLineHeightIfTooBig("id5");
  adjustFontSizeIfTooBig("id5");
  adjustLineHeightIfTooBig("id6");
  adjustFontSizeIfTooBig("id6");
  adjustLineHeightIfTooBig("id7");
  adjustFontSizeIfTooBig("id7");
  adjustLineHeightIfTooBig("id8");
  adjustFontSizeIfTooBig("id8");
  adjustLineHeightIfTooBig("id9");
  adjustFontSizeIfTooBig("id9");
  adjustLineHeightIfTooBig("id10");
  adjustFontSizeIfTooBig("id10");
  adjustLineHeightIfTooBig("id11");
  adjustFontSizeIfTooBig("id11");
  adjustLineHeightIfTooBig("id12");
  adjustFontSizeIfTooBig("id12");
  Widget.onload();
  fixAllIEPNGs("Media/transparent.gif");
  applyEffects();
}
function onPageUnload() {
  Widget.onunload();
}
