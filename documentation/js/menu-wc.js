'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">contact-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-c4f2fd60f9d5394aae9aafd46fe8e8e4219028249b8f0bd8b49413579c193735fad330885bb4481df7c30e2b3e3e605a394994e906fa01aecd2dc0d4778f2b49"' : 'data-target="#xs-components-links-module-AppModule-c4f2fd60f9d5394aae9aafd46fe8e8e4219028249b8f0bd8b49413579c193735fad330885bb4481df7c30e2b3e3e605a394994e906fa01aecd2dc0d4778f2b49"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c4f2fd60f9d5394aae9aafd46fe8e8e4219028249b8f0bd8b49413579c193735fad330885bb4481df7c30e2b3e3e605a394994e906fa01aecd2dc0d4778f2b49"' :
                                            'id="xs-components-links-module-AppModule-c4f2fd60f9d5394aae9aafd46fe8e8e4219028249b8f0bd8b49413579c193735fad330885bb4481df7c30e2b3e3e605a394994e906fa01aecd2dc0d4778f2b49"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryModule.html" data-type="entity-link" >CategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CategoryModule-934af5d2cc81fc7135fe2e7a236048c9afaf20eff53a4e9e7f555c5327528992eeca3e3ab39b18640ee2fa52a190a7336672df3593133534150dd4e760636f4d"' : 'data-target="#xs-components-links-module-CategoryModule-934af5d2cc81fc7135fe2e7a236048c9afaf20eff53a4e9e7f555c5327528992eeca3e3ab39b18640ee2fa52a190a7336672df3593133534150dd4e760636f4d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CategoryModule-934af5d2cc81fc7135fe2e7a236048c9afaf20eff53a4e9e7f555c5327528992eeca3e3ab39b18640ee2fa52a190a7336672df3593133534150dd4e760636f4d"' :
                                            'id="xs-components-links-module-CategoryModule-934af5d2cc81fc7135fe2e7a236048c9afaf20eff53a4e9e7f555c5327528992eeca3e3ab39b18640ee2fa52a190a7336672df3593133534150dd4e760636f4d"' }>
                                            <li class="link">
                                                <a href="components/AddCategoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddCategoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoryFieldsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryFieldsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoryListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditCategoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditCategoryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryRoutingModule.html" data-type="entity-link" >CategoryRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContactModule.html" data-type="entity-link" >ContactModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContactModule-f96f85efae33d9ca99ae55d7b6409f06ed2e87f781bfcc9e67537076df6e1f1488f16c429b1bf56646d23b36d27be8a3ba8f960cab81c3c277bc3f795498b836"' : 'data-target="#xs-components-links-module-ContactModule-f96f85efae33d9ca99ae55d7b6409f06ed2e87f781bfcc9e67537076df6e1f1488f16c429b1bf56646d23b36d27be8a3ba8f960cab81c3c277bc3f795498b836"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContactModule-f96f85efae33d9ca99ae55d7b6409f06ed2e87f781bfcc9e67537076df6e1f1488f16c429b1bf56646d23b36d27be8a3ba8f960cab81c3c277bc3f795498b836"' :
                                            'id="xs-components-links-module-ContactModule-f96f85efae33d9ca99ae55d7b6409f06ed2e87f781bfcc9e67537076df6e1f1488f16c429b1bf56646d23b36d27be8a3ba8f960cab81c3c277bc3f795498b836"' }>
                                            <li class="link">
                                                <a href="components/ContactFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactRoutingModule.html" data-type="entity-link" >ContactRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-f7e9d71151f865b4f3c167c9d2e6237e83c005f595cebea8268ea083e3664d45f15909fc50a7ca0dfb45c98e990ed23c4d541efc7c7b0b11ed3332cc0b734f91"' : 'data-target="#xs-components-links-module-LayoutModule-f7e9d71151f865b4f3c167c9d2e6237e83c005f595cebea8268ea083e3664d45f15909fc50a7ca0dfb45c98e990ed23c4d541efc7c7b0b11ed3332cc0b734f91"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-f7e9d71151f865b4f3c167c9d2e6237e83c005f595cebea8268ea083e3664d45f15909fc50a7ca0dfb45c98e990ed23c4d541efc7c7b0b11ed3332cc0b734f91"' :
                                            'id="xs-components-links-module-LayoutModule-f7e9d71151f865b4f3c167c9d2e6237e83c005f595cebea8268ea083e3664d45f15909fc50a7ca0dfb45c98e990ed23c4d541efc7c7b0b11ed3332cc0b734f91"' }>
                                            <li class="link">
                                                <a href="components/AddButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditionLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditionLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListingLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListingLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RemoveButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RemoveButtonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LayoutModule-f7e9d71151f865b4f3c167c9d2e6237e83c005f595cebea8268ea083e3664d45f15909fc50a7ca0dfb45c98e990ed23c4d541efc7c7b0b11ed3332cc0b734f91"' : 'data-target="#xs-injectables-links-module-LayoutModule-f7e9d71151f865b4f3c167c9d2e6237e83c005f595cebea8268ea083e3664d45f15909fc50a7ca0dfb45c98e990ed23c4d541efc7c7b0b11ed3332cc0b734f91"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LayoutModule-f7e9d71151f865b4f3c167c9d2e6237e83c005f595cebea8268ea083e3664d45f15909fc50a7ca0dfb45c98e990ed23c4d541efc7c7b0b11ed3332cc0b734f91"' :
                                        'id="xs-injectables-links-module-LayoutModule-f7e9d71151f865b4f3c167c9d2e6237e83c005f595cebea8268ea083e3664d45f15909fc50a7ca0dfb45c98e990ed23c4d541efc7c7b0b11ed3332cc0b734f91"' }>
                                        <li class="link">
                                            <a href="injectables/ConfirmService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CategoryService.html" data-type="entity-link" >CategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfirmService.html" data-type="entity-link" >ConfirmService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactService.html" data-type="entity-link" >ContactService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/CategoryResolver.html" data-type="entity-link" >CategoryResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/ContactResolver.html" data-type="entity-link" >ContactResolver</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ConfirmModalData.html" data-type="entity-link" >ConfirmModalData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Contact.html" data-type="entity-link" >Contact</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});