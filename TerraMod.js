//variables
 
var pos1=[0,0,0]
var pos2=[0,0,0]
var posplayer=[0,0,0]
var x1 =0
var y1 =0
var z1 =0
var x2 =0
var y2 =0
var z2 =0
var yblock =0
var zblock =0
var xblock=0
var l =0
var L =0
var h =0
var temp = 0
var lcmd = []
var N = 0
var UD = ""
var Ssphere = 1000
var Sblock = 1;
var Sblockdata = 1;
var Srayon = 4;
var xs =0;
var ys =0;
var zs =0;
var yss =0;
var zss =0;
var select1=0
var blockpos1=0
var superpix=0
var IDS=0
var IDblock=0
 
// Var TERRAMOD
 
//var blockUp=1
//var block=1
var PSurface=0
var blockA=[0,0]
var blockB=[0,0]
var blockC=[0,0]
var blockD=[0,0]
var Tsize=4
var mask=0
//var Y=0 
//var A=0  
//var B=300
var RID=-1
var TID=-1
var TDam=0
var Tpaint=0
var maskstart=0
//Item
 
Player.addItemCreativeInv(271,1,0); //hache en bois
 
//program
 
function Trier(){
 IDplayer=Player.getEntity()
    if(pos1[0]>pos2[0]){x2=pos1[0];x1=pos2[0]} else {x1=pos1[0];x2=pos2[0]}
    if(pos1[1]>pos2[1]){y2=pos1[1];y1=pos2[1]} else {y1=pos1[1];y2=pos2[1]}
    if(pos1[2]>pos2[2]){z2=pos1[2];z1=pos2[2]} else {z1=pos1[2];z2=pos2[2]}
}
function Tp(){
    posplayer=[Player.getX(),Player.getY(),Player.getZ()]
    if(getTile(posplayer[0]-1,posplayer[1]-2,posplayer[2]-1)!=0 && getTile(posplayer[0]-1,posplayer[1]-1,posplayer[2]-1)!=0){
        while(getTile(posplayer[0]-1,posplayer[1]-2,posplayer[2]-1)!=0 && getTile(posplayer[0]-1,posplayer[1]-1,posplayer[2]-1)!=0){
            posplayer[1]++      
        }
        setPosition(IDplayer, posplayer[0],posplayer[1],posplayer[2]);
    }
}
 
 
function desactiver(name){print(name+" désactivé")}
function activer(name){print(name+" activé")}
 
function TRandom(){
RID=Math.floor(Math.random()*4);
if (RID==0){
TID=blockA[0]
TDam=blockA[1]
}else if (RID==1){
TID=blockB[0]
TDam=blockB[1]
}else if (RID==2){
TID=blockC[0]
TDam=blockC[1]
}else if (RID==3){
TID=blockD[0]
TDam=blockD[1]
}
 
}
 
function modTick() {
    if(select1==1){
        setTile(pos1[0],pos1[1],pos1[2],1);
        select1=0
    }
    if(IDS==1){
        if(Player.getCarriedItemData()==0){
            ModPE.showTipMessage(Player.getCarriedItem());} else {ModPE.showTipMessage(Player.getCarriedItem()+":"+Player.getCarriedItemData());
        }
    }
    if(IDblock==1){ blockviser=[Player.getPointedBlockX(),Player.getPointedBlockY(),Player.getPointedBlockZ()]
        if(Level.getTile(blockviser[0],blockviser[1],blockviser[2])!=0){
        if(Level.getData(blockviser[0],blockviser[1],blockviser[2])==0){
            ModPE.showTipMessage(Level.getTile(blockviser[0],blockviser[1],blockviser[2]));} else {ModPE.showTipMessage((Level.getTile(blockviser[0],blockviser[1],blockviser[2]))+":"+(Level.getData(blockviser[0],blockviser[1],blockviser[2])));
        }
    }
    }
    if(superpix==1){
        setTile(Player.getPointedBlockX(),Player.getPointedBlockY(),Player.getPointedBlockZ(),0)
    }
}
 
 
function destroyBlock(x, y, z, side) {
    if(getCarriedItem() == 271){
        clientMessage("position 1 set");
 
        pos1[0] = x
        pos1[1] = y
        pos1[2] = z
         
        select1=1
         
        if(pos2[0]!=0){
            if(pos2[0]<pos1[0]){L=pos1[0]-pos2[0]+1}else{L=pos2[0]-pos1[0]+1}
            if(pos2[1]<pos1[1]){h=pos1[1]-pos2[1]+1}else{h=pos2[1]-pos1[1]+1}
            if(pos2[2]<pos1[2]){l=pos1[2]-pos2[2]+1}else{l=pos2[2]-pos1[2]+1}
 
            clientMessage("size : "+L+";"+h+";"+l)
             
        }
    }
}
 
function useItem(x, y, z, item, block, side){
 
if(item==271) {
 
 
    clientMessage("position 2 set");
 
    pos2[0] = x
    pos2[1] = y
    pos2[2] = z
            if(pos2[0]<pos1[0]){L=pos1[0]-pos2[0]+1}else{L=pos2[0]-pos1[0]+1}
            if(pos2[1]<pos1[1]){h=pos1[1]-pos2[1]+1}else{h=pos2[1]-pos1[1]+1}
            if(pos2[2]<pos1[2]){l=pos1[2]-pos2[2]+1}else{l=pos2[2]-pos1[2]+1}
 
 
        clientMessage("size : "+L+";"+h+";"+l)
    }
 
     
 
 
 
if(item==Ssphere){
 
Trier();
 
    xs = -Srayon;
    ys = -Srayon;
    zs = -Srayon;
    x1 = x - Srayon;
    y1 = y - Srayon;
    z1 = z - Srayon;
    x2 = x + Srayon;
    y2 = y + Srayon;
    z2 = z + Srayon;
 
 
    zss=zs;
    yss=ys;
    xblock=x1;
    yblock=y1;
    zblock=z1
    while(xblock<=x2){
        while(zblock<=z2){
            while(yblock<=y2){
                if(Srayon*Srayon>xs*xs+yss*yss+zss*zss){
                    setTile(xblock,yblock,zblock,Sblock, Sblockdata);}
                yblock++;
                yss++;
            }
            zblock++;
            yblock=y1;
            zss++;
            yss=ys
        }
        xblock++;
        zblock=z1;
        xs++;
        zss=zs;
    }
Tp();   
}
if(item==Tpaint){
 
    xs = -Tsize;
    ys = -Tsize;
    zs = -Tsize;
    x1 = x - Tsize;
    y1 = y - Tsize;
    z1 = z - Tsize;
    x2 = x + Tsize;
    y2 = y + Tsize;
    z2 = z + Tsize;
 
 
    zss=zs;
    yss=ys;
    xblock=x1;
    yblock=y1;
    zblock=z1
    while(xblock<=x2){
        while(zblock<=z2){
            while(yblock<=y2){
                if(Tsize*Tsize>xs*xs+yss*yss+zss*zss){
                    if(getTile(xblock,yblock,zblock)!=0)
                    if (PSurface==1){
                        if(getTile(xblock,yblock+1,zblock)==0)
                     if(maskstart==1){
                     if(getTile(xblock,yblock,zblock)==mask)                        
                    {
                        TRandom()
                        setTile(xblock,yblock,zblock,TID,TDam);
                    }
                    }
                    else if(maskstart==0){
                         TRandom()
                        setTile(xblock,yblock,zblock,TID,TDam);
                    }
                }
                else if(PSurface==0){
                     if(maskstart==1){
                     if(getTile(xblock,yblock,zblock)==mask)                        
                    {
                        TRandom()
                        setTile(xblock,yblock,zblock,TID,TDam);
                    }
                    }
                    else if(maskstart==0){
                         TRandom()
                        setTile(xblock,yblock,zblock,TID,TDam);
                    }
                }
                }
                yblock++;
                yss++;
            }
            zblock++;
            yblock=y1;
            zss++;
            yss=ys
        }
        xblock++;
        zblock=z1;
        xs++;
        zss=zs;
    }
Tp();   
}
 
}
 
function procCmd(cmd){
    var p = cmd.split(" ");
    var command = p[0];
    switch(command){
 
        case 'sphere':{
            switch(p[1]){
                case 'bind':{
                    getCarriedItem
                    Ssphere = getCarriedItem()
                    clientMessage("L'outil 'sphere' à été attribué à\nl'item d'ID : "+Ssphere)
                    break;
                    }
                default:
                Srayon = parseInt(p[1])
                Sblock = parseInt(p[2].split(":")[0])
                Sblockdata = parseInt(p[2].split(":")[1])
                if(Sblockdata!="NaN"){
                clientMessage("Paramètres de l'outil sphère :\nRayon : "+Srayon+" et ID : "+ Sblock+":"+Sblockdata)
                }else{clientMessage("Paramètres de l'outil sphère :\nRayon : "+Srayon+" et ID : "+ Sblock)}
 
                break;
            }
            break;
        }
        case 'paint':{
            switch(p[1]){
                case 'size':
                    if(!p[2]){
                        clientMessage("/paint size <size>")
                    }else{
                        Tsize=parseInt(p[2])
                    }
                    break;
                case 'tool':{
                    Tpaint = getCarriedItem()
                    clientMessage("tool paint bind to the itemID : "+Tpaint)
                    break;
                }
                default:
                blockA = [parseInt(p[1].split(":")[0]),parseInt(p[1].split(":")[1])]
                blockB = [parseInt(p[2].split(":")[0]),parseInt(p[2].split(":")[1])]
                blockC = [parseInt(p[3].split(":")[0]),parseInt(p[3].split(":")[1])]
                blockD = [parseInt(p[4].split(":")[0]),parseInt(p[4].split(":")[1])]
                clientMessage("paint parameters :\nID1 : "+blockA[0]+":"+blockA[1]+" ID2 : "+blockB[0]+":"+blockB[1]+" ID3 : "+blockC[0]+":"+blockC[1]+" and ID4 : "+blockD[0]+":"+blockD[1])
 
                break;
                case 'surface':
                    if(PSurface){
                        PSurface=0;
                        desactiver("surface painting")
                    }else{
                        PSurface=1;
                        activer("surface painting")
                    }
                break;
     
            }
          break;
}
 
       
case 'mask':{
    mask = parseFloat(p[1])
    if (mask>0){
    clientMessage("mask parameters : ID: "+mask)
    maskstart=1}
    else
    if (mask<1){
    maskstart=0
    clientMessage("mask off")
    }
    break;
}
        case 'set':
        {
            Trier();
            ModPE.showTipMessage("Fait")
            block = parseInt(p[1].split(":")[0]);
            blockData = parseInt(p[1].split(":")[1]);
            if(!blockData){blockData=0}
            zblock=z1
            yblock=y1
            xblock=x1
            while(xblock<=x2){
                while(zblock<=z2){
                    while(yblock<=y2){
                        setTile(xblock,yblock,zblock,block,blockData);
                        yblock++;
                    }
                    zblock++;
                    yblock=y1;
                }
                xblock++;
                zblock=z1;
            }
            Tp();
            break;
        }
 
        case 'replace':
        {
            Trier();
            ModPE.showTipMessage("Fait")
            Dblock = parseInt(p[1].split(":")[0]);
            DblockData = parseInt(p[1].split(":")[1]);
            Nblock = parseInt(p[2].split(":")[0]);
            NblockData = parseInt(p[2].split(":")[1]);
            if(!DblockData){DblockData=0}
            if(!NblockData){NblockData=0}
            xblock=x1;
            yblock=y1;
            zblock=z1;
            while(xblock<=x2){
                while(zblock<=z2){
                    while(yblock<=y2){
                        if(Dblock==getTile(xblock,yblock,zblock)){
                                if(DblockData!=0){
                                    if(Level.getData(xblock,yblock,zblock)==DblockData){
                                        setTile(xblock,yblock,zblock,Nblock,NblockData);
                                    }
                                }else{
                                    setTile(xblock,yblock,zblock,Nblock,NblockData);
                                }
                            }yblock++;
                    }
                    zblock++;
                    yblock=y1;
                }
                xblock++;
                zblock=z1;
            }
            Tp();
            break;
        }
        case 'platform':
            setTile(Player.getX()-1,Player.getY()-2.4,Player.getZ(),20)
            break;
         
        case 'id':
            if(IDS){
                    IDS=0;
                    desactiver("ID")
                }else{
                    IDS=1;
                    activer("ID")
                }
                break;
         
        case 'idblock':
            if(IDblock){
                IDblock=0;
                desactiver("IDblock")
            }else{
                IDblock=1;
                activer("IDblock")
            }
            break;
         
        case 'superpickaxe':
        case '/':
            if(superpix){
                    superpix=0;
                    desactiver("superpickaxe");
                }else{
                    superpix=1;
                    activer("superpickaxe");
                    clientMessage("§1§lAttention §r§fvous ne pouvez pas placez de block avec superpickaxe activé !");
                }
             
            break;
         
            case 'overlay':
            {
                Trier();
                ModPE.showTipMessage("Fait")
                Dblock = parseInt(p[1].split(":")[0]);
                DblockData = parseInt(p[1].split(":")[1]);
                Nblock = parseInt(p[2].split(":")[0]);
                NblockData = parseInt(p[2].split(":")[1]);
                if(!DblockData){DblockData=0}
                if(!NblockData){NblockData=0}
                zblock=z1
                yblock=y1
                xblock=x1
                while(xblock<=x2){
                    while(zblock<=z2){
                        while(yblock<=y2){
                            if(Dblock==getTile(xblock,yblock,zblock) && 0==getTile(xblock,yblock+1,zblock)){
                                if(DblockData!=0){
                                    if(Level.getData(xblock,yblock,zblock)==DblockData){
                                        setTile(xblock,yblock+1,zblock,Nblock,NblockData);
                                    }
                                    break;
                                }else{
                                    setTile(xblock,yblock+1,zblock,Nblock,NblockData);
                                    break;
                                }
                            }
                            yblock++;
                        }
                        zblock++;
                        yblock=y1;
                    }
                    xblock++;
                    zblock=z1;
                }
        Tp();
        break;
        var YAW = getYaw(PlayergetEntity());
            if (YAW <=0) {
                while(YAW <= 360){YAW=YAW+360}
            } else {
                while(YAW >= 360){YAW=YAW-360}
            }
 
            L=x2-x1
            h=y2-y1
            l=z2-z1
 
            clientMessage("size : "+L+";"+h+";"+l)
 
        }
        case 'help':
        {
            switch(p[1])
            {
                case "set":
                    clientMessage("")
                    clientMessage("§b[HELP] for §c/§fset §bcommand :");
                    clientMessage("§aRemplace toute la sélection par un type de block");
                    clientMessage("Utilisation : §c/§fset <IDBlock>");
                    break;
                case "replace":
                    clientMessage("")
                    clientMessage("§b[HELP] for §c/§freplace §bcommand :");
                    clientMessage("§aRemplace un type de block par un autre type de block");
                    clientMessage("Utilisation : §c/§freplace <IDBlockPrécédent> <IDBlockSuivant>");
                    break;
                case "overlay":
                    clientMessage("")
                    clientMessage("§b[HELP] for §c/§foverlay §bcommand :");
                    clientMessage("§aPlace un type de block au dessus d'un autre type de\n§ablock dans la selection");
                    clientMessage("Utilisation : §c/§freplace <IDBlockPrécédent> <IDBlockSuivant>");
                    break;
                    case "id":
                    clientMessage("")
                    clientMessage("§b[HELP] for §c/§fid §bcommand :");
                    clientMessage("§aAffiche l'ID complet du block ou de l'outil tenu");
                    clientMessage("Utilisation : §c/§fid ");
                    break;
                    case "idblock":
                    clientMessage("")
                    clientMessage("§b[HELP] for §c/§fidblock §bcommand :");
                    clientMessage("§aAffiche l'ID complet du block visé");
                    clientMessage("Utilisation : §c/§fidblock ");
                    break;
                 case "/":
                 case "superpickaxe":
                    clientMessage("")
                    clientMessage("§b[HELP] for §c/§fsuperpickaxe §bcommand :");
                    clientMessage("§aDetruit tous les blocs pointés !");
                    clientMessage("Utilisation : §c/§fsuperpickaxe §bou §c// ");
                    break;
                case "sphere":
                    clientMessage("")
                    clientMessage("§b[HELP] for §c/§fsphere §bcommand :");
                    clientMessage("§aPermet de paramétrer l'outil sphère");
                    clientMessage("Utilisation : §c/§fsphere <Rayon> <IDBlock>");
                    clientMessage("§aPermet aussi d'atribuer l'outil sphère a l'outil en main");
                    clientMessage("Utilisation : §c/§fsphere bind");
                    break;
                default:
                    clientMessage("")
                    clientMessage("§b[HELP] :");
                    clientMessage("§c/§fset <IDBlock>");
                    clientMessage("§c/§freplace <IDBlockPrécédent> <IDBlockSuivant>");
                    clientMessage("§c/§foverlay <IDBlockDessous> <IDBlockDessus> ");
                    clientMessage("§c/§fsphere <Rayon> <IDBlock> ou\n§c/§fsphere bind");
                    clientMessage("§c/§fsuperpickaxe §bou §c//");
                    clientMessage("§c/§fid");
                    clientMessage("§c/§fidblock");
                    break;
            }
        }
    }
    }
