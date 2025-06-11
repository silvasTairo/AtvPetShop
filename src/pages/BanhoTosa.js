import React from "react";
import Rotulo from "../components/Rotulo";
import ContentImgLeft from "../components/ContentImgLeft";
import banhoTosa from "../imagens/banhoTosa.jpg";


const BanhoTosa = () => {
	return (
		<div>
			<Rotulo rotulo='Banho e Tosa'/>

			<ContentImgLeft imagem={banhoTosa} textoImagem='Foto de banho e tosa' titulo='Cuidados com o seu pet' texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id justo porta, sollicitudin turpis faucibus, feugiat turpis. Duis a ligula mattis, pretium risus nec, porta justo. Vivamus vulputate ligula nisi, quis convallis sem convallis sed. Cras consequat leo vel consequat dictum. Ut imperdiet, tellus et placerat euismod, leo quam sagittis tellus, et consequat neque magna eu felis. Sed sodales, augue non imperdiet congue, massa lorem ultrices odio, sed vestibulum dui odio vel eros. In lacus sem, congue nec lacinia id, semper quis tellus. Phasellus quis ipsum at dui fermentum vestibulum. Quisque maximus laoreet risus a hendrerit. Fusce et mollis justo. Nullam libero ligula, imperdiet at neque eget, consectetur convallis magna. Aliquam venenatis enim et vulputate faucibus. Mauris mi lectus, imperdiet vitae blandit non, dignissim id sem. Pellentesque eleifend quis diam in tincidunt. Sed euismod vehicula ante, id consectetur lectus venenatis sit amet.
			
			uis ac porttitor tortor, at lacinia sapien. Nunc convallis ultricies molestie. Vivamus et urna libero. Quisque consequat diam sollicitudin felis pretium, et consequat nulla convallis. Etiam at accumsan dui, in porta nisi. Nulla elit ipsum, sollicitudin non ultrices eget, egestas efficitur lacus. Ut sit amet massa vel tellus condimentum malesuada vel nec est. Proin vitae convallis nisl. Sed vehicula urna metus, quis eleifend justo rutrum quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis sapien feugiat, porta dui ut, facilisis sem. Phasellus eros turpis, euismod et molestie nec, suscipit eget orci. Cras vitae interdum felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam cursus tempor libero sed blandit.'/>
		</div>
	);
};

export default BanhoTosa;
