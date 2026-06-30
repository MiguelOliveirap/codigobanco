document.addEventListener('DOMContentLoaded', () => {
    const profileBtn = document.getElementById('profile-btn');
    const settingsBtn = document.getElementById('settings-btn');
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const modalContainer = document.getElementById('modal-container');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.getElementById('close-modal');

    // Funções para abrir o modal com conteúdo específico
    const openModal = (title, content) => {
        modalBody.innerHTML = `<h2>${title}</h2>${content}`;
        modalContainer.classList.remove('hidden');
    };

    // Fechar modal
    closeModal.addEventListener('click', () => {
        modalContainer.classList.add('hidden');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            modalContainer.classList.add('hidden');
        }
    });

    // Navegação para Perfil
    profileBtn.addEventListener('click', () => {
        const content = `
            <div style="text-align: center;">
                <div class="avatar" style="width: 80px; height: 80px; margin: 0 auto 20px; font-size: 32px; background: #eee; border-radius: 50%; display: flex; align-items: center; justify-content: center;">JS</div>
                <p><strong>Nome:</strong> João Silva (Gerente)</p>
                <p><strong>Email:</strong> joao.silva@empresa.com</p>
                <p><strong>Cargo:</strong> Gerente de Operações</p>
                <p><strong>Desde:</strong> Janeiro de 2023</p>
            </div>
        `;
        openModal('Perfil do Usuário', content);
    });

    // Navegação para Configurações
    settingsBtn.addEventListener('click', () => {
        const content = `
            <ul style="list-style: none; padding: 0;">
                <li style="padding: 10px 0; border-bottom: 1px solid #eee; cursor: pointer;"><i class="fas fa-user-edit"></i> Editar Perfil</li>
                <li style="padding: 10px 0; border-bottom: 1px solid #eee; cursor: pointer;"><i class="fas fa-lock"></i> Alterar Senha</li>
                <li style="padding: 10px 0; border-bottom: 1px solid #eee; cursor: pointer;"><i class="fas fa-bell"></i> Notificações</li>
                <li style="padding: 10px 0; border-bottom: 1px solid #eee; cursor: pointer;"><i class="fas fa-palette"></i> Aparência (Modo Escuro)</li>
                <li style="padding: 10px 0; color: red; cursor: pointer;"><i class="fas fa-sign-out-alt"></i> Sair da Conta</li>
            </ul>
        `;
        openModal('Configurações', content);
    });

    // Lógica de Pesquisa
    const performSearch = () => {
        const query = searchInput.value.trim();
        if (query === "") {
            alert("Por favor, digite algo para pesquisar.");
            return;
        }

        const results = [
            { title: "Feedback de Marcela", type: "Feedback" },
            { title: "Relatório de Vendas Maio", type: "Relatório" },
            { title: "Setor de Logística", type: "Setor" },
            { title: "Análise de Produtos", type: "Análise" }
        ].filter(item => item.title.toLowerCase().includes(query.toLowerCase()));

        let content = `<p>Resultados para: <strong>"${query}"</strong></p>`;
        if (results.length > 0) {
            content += '<div style="margin-top: 20px;">';
            results.forEach(res => {
                content += `
                    <div class="search-result-item" style="padding: 10px; border-bottom: 1px solid #eee;">
                        <p><strong>${res.title}</strong></p>
                        <small>Tipo: ${res.type}</small>
                    </div>
                `;
            });
            content += '</div>';
        } else {
            content += '<p style="margin-top: 20px; color: #666;">Nenhum resultado encontrado para sua busca.</p>';
        }

        openModal('Resultados da Pesquisa', content);
    };

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Interatividade nos itens do menu
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            const name = item.querySelector('span').innerText;
            openModal(name, `<p>Você acessou a seção de <strong>${name}</strong>.</p><p>Esta funcionalidade está em desenvolvimento para o ambiente de produção.</p>`);
        });
    });
});

// Lógica específica para a tela de login
if (document.getElementById('login-form')) {
    const loginForm = document.getElementById('login-form');
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');

    // Alternar visibilidade da senha
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });

    // Simulação de Login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const btn = loginForm.querySelector('.btn-login');
        
        btn.innerText = "ENTRANDO...";
        btn.disabled = true;

        // Simula um delay de rede
        setTimeout(() => {
            // Armazena o email no localStorage para usar no dashboard
            localStorage.setItem('userEmail', email);
            localStorage.setItem('isLoggedIn', 'true');
            
            // Redireciona para o dashboard
            window.location.href = 'index.html';
        }, 1500);
    });
}

// Lógica de proteção de rota para o Dashboard
if (window.location.pathname.includes('index.html')) {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'login.html';
    }
}

// Lógica de Logout
if (document.getElementById('logout-btn')) {
    document.getElementById('logout-btn').addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        window.location.href = 'login.html';
    });
}