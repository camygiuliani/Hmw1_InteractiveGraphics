// bgImg is the background image to be modified.
// fgImg is the foreground image.
// fgOpac is the opacity of the foreground image.
// fgPos is the position of the foreground image in pixels. It can be negative and (0,0) means the top-left pixels of the foreground and background are aligned.
function composite( bgImg, fgImg, fgOpac, fgPos )
{   /*******************
    *  Alpha-Blending  *
    ********************/
    
    //bgImg and fgImg are HTMLImagesElement 

    //dimension details
    const bg_w=bgImg.width;
    const bg_h=bgImg.height;
    const fg_w=fgImg.width;
    const fg_h=fgImg.height;
    console.log(`Dimensions of bgImg ${bg_w}, ${bg_h}`);
    console.log(`Dimensions of fgImg ${fg_w}, ${fg_h}`);

    if(fgPos.x == 0 && fgPos.y==0){
        console.log(`Images are aligned at the left corner`);
    }
    // Position of the left corner of fgImg
    const fg_x=fgPos.x;
    const fg_y=fgPos.y;

    console.log(`The opacity of the added image is ${fgOpac}`);

    // I want to access the pixels , fist I have to get the arrays
    const bg_data=bgImg.data;
    const fg_data=fgImg.data;

    
    

    


   


    


}
