import React, { useEffect, useState } from "react";
import img from "../../assets/images/coming-soon-bg.jpg";
const Details = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center p-10">
      {isLoading ? (
        <div className=" w-full h-full flex flex-col gap-4 border justify-evenly p-2">
          <div className="skeleton h-80 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      ) : (
        <div className=" w-full h-full flex flex-col gap-4 border justify-between p-2">
          <div className="h-80 w-full">
            <img className="w-full h-full" src={img} alt="" />
          </div>
          <div className=" h-4 w-28">Lorem, ipsum.</div>
          <div className="flex flex-col gap-4">
            <div className=" h-full w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              eaque quibusdam voluptate hic ut omnis, itaque at sed pariatur
              repellendus quasi amet harum nihil vel libero nostrum porro
              officia similique quam ducimus excepturi voluptates debitis earum
              veniam. Mollitia ratione accusantium ea fugit, iure porro
              praesentium hic ipsam, sequi amet voluptas odit nihil itaque
              repellendus inventore nostrum repudiandae quis ipsa illum
              perspiciatis unde nulla omnis? Tempore ab eligendi maxime
              explicabo quod? Omnis ipsa qui voluptatem autem nesciunt
              perspiciatis ducimus sit, porro a iusto, enim accusamus molestias
              aliquam sapiente totam doloribus praesentium cum non quasi nam
              assumenda error. Totam quae accusantium esse ipsam, at
              exercitationem perferendis fugiat delectus eum ratione deserunt!
              Earum nemo suscipit magnam ut neque commodi error sit eos
              voluptatem et at officiis minima illo voluptates, ipsa excepturi
              ab. Vero non perferendis modi assumenda, laborum dolores!
              Inventore consequuntur ullam tempora cupiditate maxime? Ex
              asperiores esse consequuntur nihil ullam odit voluptatem ratione
              in maiores, nulla doloribus quas nobis laudantium obcaecati iusto
              saepe doloremque cupiditate aperiam unde quaerat quae? Excepturi
              unde eveniet reprehenderit aspernatur perspiciatis quisquam,
              inventore ea sapiente est alias nostrum delectus vel maiores
              distinctio veritatis esse, minus sint sit quia nemo aperiam, error
              sed deserunt. Nesciunt rerum ut, dolor dolores accusantium
              voluptatibus eius quam at dignissimos neque, ipsum iste aliquid
              ipsa incidunt ullam libero expedita quibusdam alias error! Nostrum
              vel deleniti, alias similique, praesentium natus rem illo porro
              dolor laudantium exercitationem quia sed incidunt aliquid cum qui?
              Laboriosam aliquid quaerat ex, neque, quisquam libero voluptate
              labore iste officia debitis est ullam ipsam in nemo natus sapiente
              quidem, unde commodi voluptatibus minima! Culpa nesciunt porro eum
              maiores vero nihil placeat facilis molestias tenetur ullam eius
              magnam temporibus est, obcaecati voluptatem quasi vitae quos error
              repellat. Quam repellendus iusto, repudiandae delectus voluptas
              laboriosam beatae nesciunt eligendi fugit, deleniti dolorum animi
              voluptatem soluta ea commodi. Illo, cumque recusandae fugit earum
              autem in ipsam, saepe tempore reiciendis odit molestiae eligendi
              laborum voluptatum, excepturi minima eaque unde dolorem. Expedita
              eius enim voluptates perspiciatis accusamus excepturi ut, ipsam
              aliquam dolorum eveniet explicabo culpa blanditiis vitae tenetur.
              Sint laborum esse sit doloribus ratione reprehenderit itaque sequi
              blanditiis impedit nobis distinctio, reiciendis obcaecati, omnis
              debitis sapiente vitae harum? Quod assumenda quos ad officiis fuga
              vitae itaque quasi, doloremque, consequuntur ducimus corporis
              libero quidem iure et modi distinctio voluptate corrupti at, nemo
              odit? Recusandae cumque, neque magni non consequuntur unde quis.
              Natus, voluptate amet laboriosam excepturi facere et quae earum
              porro voluptatibus sapiente, voluptatum, vel cumque illo hic.
              Neque mollitia porro rem quos nobis. Beatae nobis dolorum quo
              deserunt dolore quas libero praesentium ipsam consequuntur maiores
              esse explicabo pariatur quia illum natus nemo veniam vero,
              dignissimos ullam fugit impedit asperiores officiis fugiat? Esse
              ut laboriosam est et delectus, nam itaque dolorem quibusdam,
              excepturi, atque eos dolore. Accusamus natus, recusandae velit
              labore, enim totam iure et quis ea, reiciendis consequatur. Rem
              nemo esse doloremque quod eveniet cupiditate quidem a, ut ex
              excepturi fugiat consectetur illum corrupti molestias non eum
              pariatur, minima eaque expedita. Fugit esse numquam omnis.
              Voluptas, itaque non?
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
