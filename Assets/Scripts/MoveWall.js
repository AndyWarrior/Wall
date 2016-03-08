public static var speed : float;
private var pos : float;
 
 function Start () {
  speed = 1;
  pos = GeneralVars.posX + 1.8;
 }
 
 function Update () {
  pos += Time.deltaTime * speed;
  transform.position.x = Mathf.PingPong (pos, 3.6) - 1.8;
  if (Input.GetMouseButtonDown(0))
   {
      Destroy(this);
   }
 }