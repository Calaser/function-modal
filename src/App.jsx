import React, { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <body>
      <h1>Modal</h1>

      <button id="openBtn" onClick={openModal}>Open Model Window</button>

      {showModal ? (
        <div className="modalWrapper">
          <div className="modalBackground" onClick={closeModal} />
          <div className="modal-content">
              <div className="closeBtn" onClick={closeModal}>✖</div>
            <h2>This is a Modal Window.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi dolores quidem eaque cumque similique voluptatum recusandae eligendi, provident aspernatur?</p>
            <p>Maiores, in dolore earum consequuntur at, fuga sint quaerat natus ea perferendis animi, esse sapiente obcaecati asperiores eum velit. Ab.</p>
            <p>Eveniet dolor quam ducimus perferendis tempora ipsam, nobis asperiores laboriosam vel amet esse molestias ad. Ut maiores incidunt et at!</p>
            <p>Explicabo, fugiat unde ipsum perferendis, repellat dolorem accusantium consequatur tempora vitae tenetur ex excepturi quibusdam et sit blanditiis iste obcaecati?</p>
            <p>Illo amet distinctio dolore assumenda, illum modi necessitatibus sed nulla ab. Ex nihil rem praesentium doloribus itaque, quia molestias omnis?</p>
            <p>Totam tempora facere ipsam quas ea quod qui quis officia voluptates expedita? Sit hic sint, animi facilis itaque sed vel.</p>
            <p>Eaque, suscipit ab qui harum provident sed nostrum ducimus vel quis soluta vero. Veniam hic laudantium repudiandae nisi omnis perspiciatis.</p>
            <p>Odio ipsum accusamus, repudiandae aliquam autem in asperiores nisi nam corrupti sunt nesciunt placeat, deserunt facere consequuntur obcaecati velit architecto.</p>
            <p>Fugiat qui vitae ipsa natus, sapiente eaque incidunt alias recusandae accusantium tempore, distinctio molestias suscipit sit? Magni excepturi obcaecati ea!</p>
            <p>Cum alias illo sunt, doloribus molestiae voluptatem est, eius et temporibus repellat dolorem minima ea fugiat nam iste ipsam dolore!</p>
            <p>Dolore iure nihil dolorum non, atque, voluptate fugit quae aspernatur a dolorem, officiis aperiam obcaecati voluptatum magnam laboriosam assumenda? Incidunt?</p>
            <p>Quam mollitia, laborum unde veritatis beatae quos nihil corrupti dolorem commodi aspernatur at. Autem aperiam suscipit cupiditate temporibus in! Perspiciatis?</p>
            <p>Consequuntur nostrum magni fuga illo sint, sunt unde incidunt voluptas veritatis repellendus pariatur, sit non eius libero placeat? Neque, dolorem.</p>
            <p>Vel sapiente dignissimos vero ipsum, quae reprehenderit ipsa at voluptatibus iusto voluptas maxime exercitationem ex odit omnis unde molestiae optio!</p>
            <p>Quia quam dicta non iste nulla excepturi, minus incidunt necessitatibus enim commodi rerum, nam eligendi quo explicabo odit libero tenetur.</p>
            <p>Error sequi laudantium quos laborum. Assumenda, nam eos? Ducimus vel aut culpa repellendus repellat deleniti reprehenderit laborum non ab laboriosam.</p>
            <p>Sequi, explicabo. Officia expedita saepe ipsa ex provident quibusdam veritatis. Quia facere est tempora illo commodi sunt voluptate tempore quis!</p>
            <p>Molestias nam dignissimos dolorum natus doloremque sunt. Facere similique officiis architecto quia at laborum saepe nemo, maiores fugit eligendi consequatur.</p>
            <p>Similique provident nulla nam tenetur quis nihil, nemo temporibus? Autem nisi similique enim ea maxime quod numquam dolore necessitatibus minima!</p>
            <p>Ut, quidem? Corrupti et, eos nihil qui maxime eligendi, nam, ullam impedit tenetur consequuntur libero optio earum voluptatibus est odit!</p>
          </div>
        </div>
      ) : null}
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione magnam quam similique nam deleniti? Sapiente consequatur consectetur repellat quaerat quod accusantium ab itaque in nobis temporibus? Ratione obcaecati aliquam at.</p>
      <p>Accusantium unde ratione accusamus esse enim? Et ducimus eius voluptates accusamus provident sit nemo laudantium error. Eveniet magni provident quasi ab optio porro veritatis, aspernatur omnis totam dolorum itaque rem.</p>
      <p>Corporis quam eius necessitatibus, cupiditate ad illo exercitationem harum dicta itaque iusto cum commodi non accusantium minus. Impedit, esse vel asperiores voluptate porro, architecto obcaecati, suscipit nulla dignissimos sed repellendus?</p>
      <p>Temporibus, alias. Obcaecati quas autem unde consectetur suscipit laboriosam porro. Optio, nemo ipsum at soluta debitis, perferendis sit nobis ipsam perspiciatis cumque pariatur architecto aperiam id iusto modi dignissimos molestiae?</p>
      <p>Repellendus rerum sunt blanditiis itaque autem fugit deleniti nobis magnam saepe tenetur, harum et, exercitationem excepturi error omnis animi amet deserunt officia, quos corporis. Aliquid ratione veniam sunt soluta amet.</p>
      <p>Sequi impedit, consequuntur nobis itaque aut dignissimos in ipsam incidunt nisi veritatis laboriosam accusantium, reprehenderit atque quia cum quasi harum deleniti! Accusantium quod minima rem suscipit quae. Nisi, unde cum.</p>
      <p>Enim aut reprehenderit et unde hic provident sapiente delectus eius debitis animi facere, expedita veritatis numquam consequatur nam fugit sunt officia consequuntur maxime! Perspiciatis commodi dolorum cupiditate laudantium quos quod.</p>
      <p>Quam id, perferendis totam laborum eaque modi suscipit blanditiis reprehenderit nostrum porro ratione vel neque ullam est non pariatur eligendi, fugiat voluptatem at a voluptates veniam deleniti? Neque, hic veniam.</p>
      <p>Deserunt aspernatur optio itaque error doloremque exercitationem laudantium, aut hic quidem quo ullam quisquam illo recusandae, labore eos dolor. Impedit asperiores fugit, ipsum natus enim doloremque tempore reiciendis. Optio, suscipit!</p>
      <p>Voluptatum a vitae mollitia! Aliquid itaque quisquam, unde dolorum debitis sed cum doloremque distinctio labore est a voluptatibus laudantium eum id rerum non? Doloribus amet culpa itaque placeat eaque? Ducimus.</p>
    </body>
  );
}

export default App;