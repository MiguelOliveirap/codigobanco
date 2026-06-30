// ============================================
// LÓGICA DO DASHBOARD
// ============================================

/**
 * Função para alternar modal de notificações
 */
function toggleNotifications() {
    const modal = document.getElementById('notificationsModal');
    modal.classList.toggle('active');
}

/**
 * Fechar modal ao clicar fora
 */
document.addEventListener('click', function(event) {
    const modal = document.getElementById('notificationsModal');
    const notificationIcon = document.querySelector('.notification-icon');
    
    if (modal && !modal.contains(event.target) && !notificationIcon.contains(event.target)) {
        modal.classList.remove('active');
    }
});

/**
 * Função de pesquisa
 */
document.addEventListener('DOMContentLoaded', function() {
    // Recuperar dados do usuário do localStorage
    const userEmail = localStorage.getItem('userEmail');
    const companyId = localStorage.getItem('companyId');
    
    if (companyId) {
        document.getElementById('companyId').textContent = companyId;
    }

    // Verificar autenticação
    const userToken = localStorage.getItem('userToken');
    if (!userToken) {
        // Redirecionar para login se não estiver autenticado
        navigateTo('../pages/login.html');
        return;
    }

    // Implementar busca
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                console.log('Pesquisando por:', this.value);
                // Aqui você pode adicionar lógica de busca
            }
        });
    }

    console.log('Dashboard carregado para:', userEmail);
});

/**
 * Função para fazer logout
 */
function logout() {
    if (confirm('Tem certeza que deseja sair?')) {
        // Limpar dados da sessão
        sessionStorage.clear();
        localStorage.removeItem('userToken');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('companyId');
        
        // Redirecionar para a página inicial
        navigateTo('../index.html');
    }
}