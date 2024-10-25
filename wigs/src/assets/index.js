// Import logo
import logo from './logo.jpeg';

// Import images from bobs directory
import bob1 from './bobs/wig1.jpg';
import bob2 from './bobs/wig2.jpg';
import bob3 from './bobs/wig3.jpg';
import bob4 from './bobs/wig4.jpg';
import bob5 from './bobs/wig5.jpg';
import bob6 from './bobs/wig6.jpg';
import bob7 from './bobs/wig7.jpg';

// Import images from curly directory
import curly1 from './curly/wig1.jpg';
import curly2 from './curly/wig2.jpg';
import curly3 from './curly/wig3.jpg';
import curly4 from './curly/wig4.jpg';
import curly5 from './curly/wig5.jpg';
import curly6 from './curly/wig6.jpg';

// Import images from full_lace directory
import fullLace2 from './full_lace/wig2.jpg';
import fullLace3 from './full_lace/wig3.jpg';
import fullLace4 from './full_lace/wig4.jpg';
import fullLace5 from './full_lace/wig5.jpg';
import fullLace6 from './full_lace/wig6.jpg';
import fullLace7 from './full_lace/wig7.jpg';
import fullLace8 from './full_lace/wig8.jpg';
import fullLace9 from './full_lace/wig9.jpg';

// Import images from human_hair directory
import humanHair1 from './human_hair/wig1.jpg';
import humanHair2 from './human_hair/wig2.jpg';
import humanHair3 from './human_hair/wig3.jpg';
import humanHair4 from './human_hair/wig4.jpg';
import humanHair5 from './human_hair/wig5.jpg';
import humanHair6 from './human_hair/wig6.jpg';
import humanHair7 from './human_hair/wig7.jpg';
import humanHair8 from './human_hair/wig8.jpg';

// Import images from lace_front directory
import laceFront1 from './lace_front/wig1.jpg';
import laceFront2 from './lace_front/wig2.jpg';
import laceFront3 from './lace_front/wig3.jpg';
import laceFront4 from './lace_front/wig4.jpg';
import laceFront5 from './lace_front/wig5.jpg';
import laceFront6 from './lace_front/wig6.jpg';
import laceFront7 from './lace_front/wig7.jpg';
import laceFront8 from './lace_front/wig8.jpg';

// Import images from long directory
import long1 from './long/wig1.jpg';
import long2 from './long/wig2.jpg';
import long3 from './long/wig3.jpg';
import long4 from './long/wig4.jpg';
import long5 from './long/wig5.jpg';
import long6 from './long/wig6.jpg';
import long7 from './long/wig7.jpg';
import long8 from './long/wig8.jpg';
import long9 from './long/wig9.jpg';
import long10 from './long/wig10.jpg';
import long11 from './long/wig11.jpg';
import long12 from './long/wig12.jpg';
import long13 from './long/wig13.jpg';
import long14 from './long/wig14.jpg';
import long15 from './long/wig15.jpg';
import long16 from './long/wig16.jpg';

// Import images from pixie directory
import pixie1 from './pixie/wig1.jpg';
import pixie2 from './pixie/wig2.jpg';
import pixie3 from './pixie/wig3.jpg';

// Import images from synthetics directory
import synthetic1 from './synthetics/wig1.jpg';
import synthetic2 from './synthetics/wig2.jpg';
import synthetic3 from './synthetics/wig3.jpg';
import synthetic4 from './synthetics/wig4.jpg';
import synthetic5 from './synthetics/wig5.jpg';
import synthetic6 from './synthetics/wig6.jpg';
import synthetic7 from './synthetics/wig7.jpg';

// Import brand image
import brand4 from './brand4.jpeg';

export const assets = {
  logo,
  brand4,
  // Export bob wigs
  bob1, bob2, bob3, bob4, bob5, bob6, bob7,
  // Export curly wigs
  curly1, curly2, curly3, curly4, curly5, curly6,
  // Export full lace wigs
  fullLace2, fullLace3, fullLace4, fullLace5, fullLace6, fullLace7, fullLace8, fullLace9,
  // Export human hair wigs
  humanHair1, humanHair2, humanHair3, humanHair4, humanHair5, humanHair6, humanHair7, humanHair8,
  // Export lace front wigs
  laceFront1, laceFront2, laceFront3, laceFront4, laceFront5, laceFront6, laceFront7, laceFront8,
  // Export long wigs
  long1, long2, long3, long4, long5, long6, long7, long8, long9, long10,
  long11, long12, long13, long14, long15, long16,
  // Export pixie wigs
  pixie1, pixie2, pixie3,
  // Export synthetic wigs
  synthetic1, synthetic2, synthetic3, synthetic4, synthetic5, synthetic6, synthetic7,
  
  // Map the old wig1, wig2, etc. references to specific images for compatibility
  wig1: synthetic1, // For example purposes, you may want to change these mappings
  wig2: humanHair1,
  wig3: laceFront1,
  wig4: fullLace2
};

export default assets;
