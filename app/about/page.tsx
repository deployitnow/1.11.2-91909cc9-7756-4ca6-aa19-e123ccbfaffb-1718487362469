import Header from '@/components/shared/Header';

export default function About() {
  return (
    <div className="flex flex-col w-full items-center justify-between fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center mb-12">
        <section className="w-full p-6 container-narrow">
          <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl fancy-heading">
            About Thalione Corp.
          </h1>

          <p className="mt-6 md:text-xl">Delivering best-in-class digital solutions for local eateries</p>

          <p className="mt-6 md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in venenatis lorem. Aliquam quis ante non augue blandit ultrices. Aenean ac egestas urna. Vestibulum sit amet maximus nibh. Donec varius blandit dolor vitae rhoncus. Nullam lacinia, ex vitae iaculis dapibus, erat massa vestibulum justo, in suscipit orci sapien non erat. Integer et condimentum justo. Sed porta velit tellus.  Etiam vehicula dolor eu justo cursus, sed dignissim elit blandit. Cras ut egestas tellus. Donec finibus ullamcorper tristique. Nulla pretium porttitor consequat. In hac habitasse platea dictumst. Vestibulum lobortis sapien eu nibh elementum scelerisque. Fusce a aliquam turpis, sit amet porta felis. Aliquam tempus tincidunt neque, vel interdum libero scelerisque eget. Sed a diam cursus, congue erat at, mollis erat. Sed leo est, mollis eu metus at, ultricies sagittis est. In id leo fringilla, porttitor tellus id, porttitor enim.  Duis iaculis cursus nisi at vehicula. Duis iaculis sed ipsum et porttitor. Aliquam et aliquam magna, sit amet ultricies dui. Quisque non efficitur urna. Nulla tempor faucibus eros, nec condimentum lacus pellentesque vel. Nulla ut nunc vulputate, egestas neque nec, commodo metus. Sed mattis justo ut quam tristique dictum. Morbi lectus orci, commodo ac risus semper, faucibus auctor nulla. Ut nec arcu aliquam, pretium augue in, commodo ipsum. Sed eu rhoncus ante. Nunc consequat nisi mi, sit amet interdum odio maximus a. Nunc vitae orci non erat finibus accumsan sed a velit.  Mauris sagittis porta tincidunt. Aliquam erat volutpat. Integer fermentum, nisi ut ullamcorper consectetur, nibh mi malesuada ipsum, sed aliquet neque dolor quis mi. Donec ultrices faucibus ex at mollis. Nunc lacinia mollis hendrerit. Ut ipsum risus, imperdiet id sodales nec, rutrum ut orci. Pellentesque nec venenatis metus. In elit mi, aliquam et dolor eget, aliquet varius lorem. Morbi ornare, lorem at volutpat scelerisque, dolor odio interdum metus, non vehicula orci libero ac sapien. Donec gravida sagittis ultrices. Maecenas mollis metus id nunc condimentum tristique. Donec scelerisque interdum arcu feugiat venenatis. Ut eu arcu eu augue accumsan rhoncus.  Nulla vestibulum elementum leo, ut tempor odio aliquet sed. Sed cursus dolor elit, ut pellentesque leo posuere non. Mauris sem purus, feugiat eu cursus in, rhoncus vel odio. Morbi lacinia neque porttitor metus lacinia interdum id et urna. Cras ac nisi semper, consectetur velit sed, condimentum nibh. Phasellus lectus purus, lobortis at nisi sit amet, rutrum mollis purus. Suspendisse congue tellus et diam pulvinar facilisis. Aliquam cursus ipsum ullamcorper nunc facilisis efficitur. Nulla lobortis lorem vitae dapibus ultricies. Fusce faucibus scelerisque ultrices. Pellentesque nec posuere est, nec hendrerit sem. Sed hendrerit pretium est at bibendum.</p>
        </section>
      </div>
    </div>
  );
}
