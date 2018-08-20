// title      : OpenJSCAD.org Logo
// author     : Rene K. Mueller
// license    : MIT License
// revision   : 0.003
// tags       : Logo,Intersection,Sphere,Cube
// file       : logo.jscad



function main () {
  return union(
		// top
		difference(
			cube({size:[17,17,1],center:true}).translate([0,0,64]),
			sphere({r:2.5,center:true}).translate([0,0,65])
		),
		//base
	  	difference(
		    difference(
		      cube({size: [15,5,5], center: true}).translate([0,0,0]),
		      cube({size: [51,5,2], center: true}).translate([0,-2,0])
		    ),
		    cube({size:[2,15,1.5], center: true}).translate([2,7,0]),
		    cube({size:[2,15,1.5], center: true}).translate([-2,7,0])
	    ).translate([0,-5.5, 60.575]),
		difference(
            difference(
				cube({size: [15,5,5], center: true}).translate([0,0,0]),
				cube({size: [51,5,2], center: true}).translate([0,-2,0])
            ),
            cube({size:[2,15,1.5], center: true}).translate([2,7,0]),
            cube({size:[2,15,1.5], center: true}).translate([-2,7,0])
        ).rotateX(90).rotateX(90).translate([0,5.5, 60.575]),
		torus({ ri : 1,fni : 16, roti : 16, ro : 4, fno : 4}).scale([1,1,30]).translate([0,0,30]),
		difference(
			cylinder({d:30,h:1,fn:64}).rotateZ(45),
			cylinder({d:7,h:10, center: true}).translate([0,0,0])
		)
	)
}
