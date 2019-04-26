<?php
header('content-type:stocked/html;charset="utf-8"');
error_reporting(0);

$news = array(
	array('category'=>'Sporting Goods','price'=>'$3449.99','stocked'=> "This is one comment","name"=>"bacategoryu.jpg"),
	array('category'=>'Sporting Goods','price'=>'$4','stocked'=> "This is another comment","name"=>"google.jpg"),
	array('category'=>'Sporting Goods','price'=>'$456.96','stocked'=> "Long comment, the more is ignore, this","name"=>"huohu.jpg"),
	array('category'=>'Electronics','price'=>'$449.99','stocked'=> "This is one comment","name"=>"google11.jpg"),
	array('category'=>'Electronics','price'=>'$409.99','stocked'=> "Long comment, the more is ignore, this","name"=>"bacategoryu.jpg"),
	array('category'=>'office','price'=>'$89.99','stocked'=> "This is another comment","name"=>"huohu1.jpg"),
	array('category'=>'office','price'=>'$490.99','stocked'=> "This is another comment","name"=>"huohu2.jpg"),
	array('category'=>'office','price'=>'$679.909','stocked'=> "This is another comment","name"=>"huohu3.jpg"),
);

echo json_encode($news);