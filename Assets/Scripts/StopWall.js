public var Square: Transform;
function Update()
 {
   if (Input.GetMouseButtonDown(0))
   {
      var go = Instantiate(Square, new Vector2(0,0), Quaternion.identity);
      go.gameObject.AddComponent(MoveWall);
   }
 }