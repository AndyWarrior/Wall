public var Square: Transform;
function Update()
 {
   if (Input.GetMouseButtonDown(0))
   {
   	  GeneralVars.posY = GeneralVars.posY + 1;
   	  GeneralVars.posX = GeneralVars.posX * -1;
      var go = Instantiate(Square, new Vector2(GeneralVars.posX,GeneralVars.posY), Quaternion.identity);
      go.gameObject.AddComponent(MoveWall);
   }
 }